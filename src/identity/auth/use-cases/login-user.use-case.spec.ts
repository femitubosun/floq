import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { Mocked } from 'jest-mock';

import { LoginUserUseCase } from './login-user.use-case';
import { UserService } from '@/identity/user/services/user.service';
import { SessionService } from '@/identity/auth/services/session.service';
import { JwtService } from '@/infrastructure/crypto/services/jwt.service';
import { LoginUserDto } from '@/identity/auth/__defs__/auth.dto';
import { User } from '@/infrastructure/prisma/__defs__'; // Assuming User type from Prisma

// Mock the services that LoginUserUseCase depends on
jest.mock('@/identity/user/services/user.service');
jest.mock('@/identity/auth/services/session.service');
jest.mock('@/infrastructure/crypto/services/jwt.service');

describe('LoginUserUseCase', () => {
  let loginUserUseCase: LoginUserUseCase;
  let userService: Mocked<UserService>;
  let sessionService: Mocked<SessionService>;
  let jwtService: Mocked<JwtService>;

  const mockLoginDto: LoginUserDto = {
    email: 'test@example.com',
    password: 'password123',
  };

  const mockUser: User = {
    id: 'user-id-123',
    email: 'test@example.com',
    name: 'Test User',
    password: 'hashedPasswordFromDB',
  };

  const mockSessionVersion = 1;
  const mockJwtToken = 'mock.jwt.token';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginUserUseCase,
        UserService, // Provide the actual service class for NestJS DI to work with mocks
        SessionService,
        JwtService,
      ],
    }).compile();

    loginUserUseCase = module.get<LoginUserUseCase>(LoginUserUseCase);
    userService = module.get(UserService);
    sessionService = module.get(SessionService);
    jwtService = module.get(JwtService);
  });

  it('should login successfully and return a token', async () => {
    userService.authenticateUser.mockResolvedValue(mockUser);
    sessionService.refreshSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockResolvedValue(mockJwtToken);

    const result = await loginUserUseCase.execute(mockLoginDto);

    expect(userService.authenticateUser).toHaveBeenCalledWith(mockLoginDto);
    expect(sessionService.refreshSession).toHaveBeenCalledWith(mockUser);
    expect(jwtService.generateAuthToken).toHaveBeenCalledWith(
      mockUser,
      mockSessionVersion,
    );
    expect(result).toEqual({
      message: 'User logged in successfully',
      token: mockJwtToken,
    });
  });

  it('should throw BadRequestException if user authentication fails', async () => {
    const authError = new BadRequestException('Invalid credentials');
    userService.authenticateUser.mockRejectedValue(authError);

    await expect(loginUserUseCase.execute(mockLoginDto)).rejects.toThrow(
      BadRequestException,
    );
    await expect(loginUserUseCase.execute(mockLoginDto)).rejects.toThrow(
      'Invalid credentials',
    );

    expect(userService.authenticateUser).toHaveBeenCalledWith(mockLoginDto);
    expect(sessionService.refreshSession).not.toHaveBeenCalled();
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should throw an exception if session refresh fails', async () => {
    const sessionError = new Error('Session refresh failed');
    userService.authenticateUser.mockResolvedValue(mockUser);
    sessionService.refreshSession.mockRejectedValue(sessionError);

    await expect(loginUserUseCase.execute(mockLoginDto)).rejects.toThrow(
      'Session refresh failed',
    );

    expect(userService.authenticateUser).toHaveBeenCalledWith(mockLoginDto);
    expect(sessionService.refreshSession).toHaveBeenCalledWith(mockUser);
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should throw an exception if token generation fails', async () => {
    const tokenError = new Error('Token generation failed');
    userService.authenticateUser.mockResolvedValue(mockUser);
    sessionService.refreshSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockRejectedValue(tokenError);

    await expect(loginUserUseCase.execute(mockLoginDto)).rejects.toThrow(
      'Token generation failed',
    );

    expect(userService.authenticateUser).toHaveBeenCalledWith(mockLoginDto);
    expect(sessionService.refreshSession).toHaveBeenCalledWith(mockUser);
    expect(jwtService.generateAuthToken).toHaveBeenCalledWith(
      mockUser,
      mockSessionVersion,
    );
  });
});
