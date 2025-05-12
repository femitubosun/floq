import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';

import { makeSessionKey } from '../utils/session.utils';
import { JwtPayloadSchema, SessionUserSchema } from '../__defs__';

import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { JwtService } from 'src/infrastructure/crypto/services/jwt.service';
import { AuthedRequest } from 'src/common/__defs__';
import { CacheService } from '@/infrastructure/cache/services/cache.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private cacheService: CacheService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<FastifyRequest>();
    const token = this.extractTokenFromHeader(request);

    const AUTH_ERROR = 'Authentication required';

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const jwtPayload = await this.jwtService.verify(token);

      const payload = JwtPayloadSchema.parse(jwtPayload);

      const session = await this.cacheService.get<SessionUserSchema>(
        makeSessionKey(payload.sub),
      );

      if (!session || session.sessionVersion !== payload.sessionVersion) {
        throw new Error();
      }

      (request as AuthedRequest).user = session;
    } catch {
      throw new UnauthorizedException(AUTH_ERROR);
    }
    return true;
  }

  private extractTokenFromHeader(request: FastifyRequest): string | undefined {
    const authHeader = (request.headers as unknown as Record<string, string>)
      .authorization;
    if (!authHeader) return undefined;

    const [type, token] = authHeader.split(' ');
    return type === 'Bearer' ? token : undefined;
  }
}
