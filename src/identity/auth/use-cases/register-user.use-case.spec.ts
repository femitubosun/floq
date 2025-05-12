import { Test, TestingModule } from '@nestjs/testing';
import { Mocked } from 'jest-mock';
import { ConflictException } from '@nestjs/common';

import { RegisterUserUseCase } from './register-user.use-case';
import { JwtService } from '@/infrastructure/crypto/services/jwt.service';
import { UserService } from '@/identity/user/services/user.service';
import { SessionService } from '@/identity/auth/services/session.service';
import { MailDispatcherService } from '@/infrastructure/mail/mail-dispatcher.service';
import { OtpService } from '../services/otp.service';
import { RegisterUserDto } from '@/identity/auth/__defs__/auth.dto';
import { User } from '@/infrastructure/prisma/__defs__';

jest.mock('@/infrastructure/crypto/services/jwt.service');
jest.mock('@/identity/user/services/user.service');
jest.mock('@/identity/auth/services/session.service');
jest.mock('@/infrastructure/mail/mail-dispatcher.service');
jest.mock('../services/otp.service');

describe('RegisterUserUseCase', () => {
  let useCase: RegisterUserUseCase;
  let jwtService: Mocked<JwtService>;
  let userService: Mocked<UserService>;
  let sessionService: Mocked<SessionService>;
  let mailDispatcher: Mocked<MailDispatcherService>;
  let otpService: Mocked<OtpService>;

  const mockRegisterDto: RegisterUserDto = {
    email: 'test@example.com',
    name: 'Test User',
    password: 'password123',
  };

  const mockUser: User = {
    id: 'user-id-123',
    email: 'test@example.com',
    name: 'Test User',
    password: 'hashedPassword',
  };

  const mockOtp = {
    otpToken: {
      id: 'otp-id-123',
      userId: mockUser.id,
      tokenType: 'SIGNUP' as const,
      tokenHash: 'hashedToken',
      isUsed: false,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from now
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    otp: '1234',
  };

  const mockSessionVersion = 1;
  const mockJwtToken = 'mock.jwt.token';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterUserUseCase,
        JwtService,
        UserService,
        SessionService,
        MailDispatcherService,
        OtpService,
      ],
    }).compile();

    useCase = module.get<RegisterUserUseCase>(RegisterUserUseCase);
    jwtService = module.get(JwtService);
    userService = module.get(UserService);
    sessionService = module.get(SessionService);
    mailDispatcher = module.get(MailDispatcherService);
    otpService = module.get(OtpService);
  });

  it('should successfully register a user, send welcome email, initialize session, and return a token', async () => {
    userService.registerUser.mockResolvedValue(mockUser);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockResolvedValue(undefined);
    sessionService.initializeSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockResolvedValue(mockJwtToken);

    const result = await useCase.execute(mockRegisterDto);

    expect(userService.registerUser).toHaveBeenCalledWith(mockRegisterDto);
    expect(otpService.createOtpToken).toHaveBeenCalledWith(
      mockUser.id,
      'SIGNUP',
    );
    expect(mailDispatcher.sendWelcomeMail).toHaveBeenCalledWith({
      email: mockUser.email,
      otp: mockOtp.otp,
      firstName: 'Test',
    });
    expect(sessionService.initializeSession).toHaveBeenCalledWith(mockUser);
    expect(jwtService.generateAuthToken).toHaveBeenCalledWith(
      mockUser,
      mockSessionVersion,
    );
    expect(result).toEqual({
      message: 'User registered successfully',
      token: mockJwtToken,
    });
  });

  it('should handle user name with only one part for firstName in email', async () => {
    const userWithSingleName: User = { ...mockUser, name: 'SingleName' };
    userService.registerUser.mockResolvedValue(userWithSingleName);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockResolvedValue(undefined);
    sessionService.initializeSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockResolvedValue(mockJwtToken);

    await useCase.execute(mockRegisterDto);

    expect(mailDispatcher.sendWelcomeMail).toHaveBeenCalledWith({
      email: userWithSingleName.email,
      otp: mockOtp.otp,
      firstName: 'SingleName',
    });
  });

  it('should handle user with no name for firstName in email', async () => {
    const userWithNoName: User = { ...mockUser, name: null };
    userService.registerUser.mockResolvedValue(userWithNoName);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockResolvedValue(undefined);
    sessionService.initializeSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockResolvedValue(mockJwtToken);

    await useCase.execute(mockRegisterDto);

    expect(mailDispatcher.sendWelcomeMail).toHaveBeenCalledWith({
      email: userWithNoName.email,
      otp: mockOtp.otp,
      firstName: '',
    });
  });

  it('should throw ConflictException if user registration fails (e.g., user already exists)', async () => {
    const errorMessage = 'User already exists';
    userService.registerUser.mockRejectedValue(
      new ConflictException(errorMessage),
    );

    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(
      ConflictException,
    );
    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(
      errorMessage,
    );

    expect(otpService.createOtpToken).not.toHaveBeenCalled();
    expect(mailDispatcher.sendWelcomeMail).not.toHaveBeenCalled();
    expect(sessionService.initializeSession).not.toHaveBeenCalled();
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should propagate error if OTP creation fails', async () => {
    const otpError = new Error('OTP creation failed');
    userService.registerUser.mockResolvedValue(mockUser);
    otpService.createOtpToken.mockRejectedValue(otpError);

    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(otpError);

    expect(mailDispatcher.sendWelcomeMail).not.toHaveBeenCalled();
    expect(sessionService.initializeSession).not.toHaveBeenCalled();
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should propagate error if sending welcome mail fails', async () => {
    const mailError = new Error('Mail sending failed');
    userService.registerUser.mockResolvedValue(mockUser);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockRejectedValue(mailError);

    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(mailError);

    expect(sessionService.initializeSession).not.toHaveBeenCalled();
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should propagate error if session initialization fails', async () => {
    const sessionError = new Error('Session initialization failed');
    userService.registerUser.mockResolvedValue(mockUser);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockResolvedValue(undefined);
    sessionService.initializeSession.mockRejectedValue(sessionError);

    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(
      sessionError,
    );
    expect(jwtService.generateAuthToken).not.toHaveBeenCalled();
  });

  it('should propagate error if token generation fails', async () => {
    const tokenError = new Error('Token generation failed');
    userService.registerUser.mockResolvedValue(mockUser);
    otpService.createOtpToken.mockResolvedValue(mockOtp);
    mailDispatcher.sendWelcomeMail.mockResolvedValue(undefined);
    sessionService.initializeSession.mockResolvedValue(mockSessionVersion);
    jwtService.generateAuthToken.mockRejectedValue(tokenError);

    await expect(useCase.execute(mockRegisterDto)).rejects.toThrow(tokenError);
  });
});
