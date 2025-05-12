import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import { User } from '@/infrastructure/prisma/__defs__';
import { CacheService } from '@/infrastructure/cache/services/cache.service';
import { SessionUserSchema } from '../__defs__';
import { SessionService } from './session.service';
import { makeSessionKey, makeSessionUser } from '../utils/session.utils';

const mockUser: User = {
  id: 'user-123',
  email: 'test@example.com',
  name: 'Test User',
  password: 'hashedPassword',
};

const mockSessionTTL = 3600; // Example TTL in seconds

describe('SessionService', () => {
  let service: SessionService;
  let cacheService: Mocked<CacheService>;
  let configService: Mocked<ConfigService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SessionService,
        {
          provide: CacheService,
          useValue: {
            set: jest.fn(),
            get: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(SessionService);
    cacheService = module.get(CacheService);
    configService = module.get(ConfigService);

    // Default mock for configService.get('SESSION_TTL')
    configService.get.mockImplementation((key: string) => {
      if (key === 'SESSION_TTL') {
        return mockSessionTTL;
      }
      return undefined;
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createSession', () => {
    it('should create a session for a given user with a specific session version', async () => {
      const sessionVersion = 5;
      const expectedKey = makeSessionKey(mockUser.id);
      const expectedValue = makeSessionUser(mockUser, sessionVersion);

      await service.createSession(mockUser, sessionVersion);

      expect(cacheService.set).toHaveBeenCalledWith(
        expectedKey,
        expectedValue,
        mockSessionTTL,
      );
      expect(configService.get).toHaveBeenCalledWith('SESSION_TTL');
    });

    it('should create a session with default session version 1 if not provided', async () => {
      const expectedKey = makeSessionKey(mockUser.id);
      const expectedValue = makeSessionUser(mockUser, 1); // Default version

      await service.createSession(mockUser);

      expect(cacheService.set).toHaveBeenCalledWith(
        expectedKey,
        expectedValue,
        mockSessionTTL,
      );
    });
  });

  describe('getSession', () => {
    it('should retrieve a session for a given userId if it exists', async () => {
      const userId = 'user-123';
      const expectedKey = makeSessionKey(userId);
      const mockStoredSession: SessionUserSchema = {
        id: userId,
        email: 'cached@example.com',
        name: 'Cached User',
        sessionVersion: 2,
        roles: [],
      };
      cacheService.get.mockResolvedValue(mockStoredSession);

      const result = await service.getSession(userId);

      expect(cacheService.get).toHaveBeenCalledWith(expectedKey);
      expect(result).toEqual(mockStoredSession);
    });

    it('should return null if the session does not exist for a given userId', async () => {
      const userId = 'user-nonexistent';
      const expectedKey = makeSessionKey(userId);
      cacheService.get.mockResolvedValue(null);

      const result = await service.getSession(userId);

      expect(cacheService.get).toHaveBeenCalledWith(expectedKey);
      expect(result).toBeNull();
    });
  });

  describe('initializeSession', () => {
    it('should create a session with version 1 and return 1', async () => {
      const expectedKey = makeSessionKey(mockUser.id);
      const expectedValue = makeSessionUser(mockUser, 1);

      // We can also spy on createSession if we want to ensure it's called,
      // but testing the underlying cacheService.set call is more direct here.
      // const createSessionSpy = jest.spyOn(service, 'createSession');

      const result = await service.initializeSession(mockUser);

      expect(cacheService.set).toHaveBeenCalledWith(
        expectedKey,
        expectedValue,
        mockSessionTTL,
      );
      // expect(createSessionSpy).toHaveBeenCalledWith(mockUser, 1);
      expect(result).toBe(1);
    });
  });

  describe('invalidateSession', () => {
    it('should delete the session for a given userId', async () => {
      const userId = 'user-to-invalidate';
      const expectedKey = makeSessionKey(userId);

      await service.invalidateSession(userId);

      expect(cacheService.delete).toHaveBeenCalledWith(expectedKey);
    });
  });

  describe('refreshSession', () => {
    it('should increment session version and create a new session if current session exists', async () => {
      const currentSessionVersion = 3;
      const newSessionVersion = currentSessionVersion + 1;
      const mockStoredSession: SessionUserSchema = makeSessionUser(
        mockUser,
        currentSessionVersion,
      );

      cacheService.get.mockResolvedValue(mockStoredSession); // Mock getSession part

      const expectedKey = makeSessionKey(mockUser.id);
      const expectedNewValue = makeSessionUser(mockUser, newSessionVersion);

      const result = await service.refreshSession(mockUser);

      expect(cacheService.get).toHaveBeenCalledWith(
        makeSessionKey(mockUser.id),
      );
      expect(cacheService.set).toHaveBeenCalledWith(
        expectedKey,
        expectedNewValue,
        mockSessionTTL,
      );
      expect(result).toBe(newSessionVersion);
    });

    it('should set session version to 2 and create a new session if no current session exists', async () => {
      cacheService.get.mockResolvedValue(null); // Mock getSession part - no session found

      const newSessionVersion = 2; // (null?.sessionVersion || 1) + 1 = (1) + 1 = 2
      const expectedKey = makeSessionKey(mockUser.id);
      const expectedNewValue = makeSessionUser(mockUser, newSessionVersion);

      const result = await service.refreshSession(mockUser);

      expect(cacheService.get).toHaveBeenCalledWith(
        makeSessionKey(mockUser.id),
      );
      expect(cacheService.set).toHaveBeenCalledWith(
        expectedKey,
        expectedNewValue,
        mockSessionTTL,
      );
      expect(result).toBe(newSessionVersion);
    });
  });
});
