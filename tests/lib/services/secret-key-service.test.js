import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import { createSecretKey, deleteSecretKey } from '@/lib/services/secret-key-service';

beforeAll(() => {
  vi.mock('server-only', () => ({}));

  vi.mock('@/lib/verifySession', () => ({
    default: vi.fn(),
  }));

  vi.mock('@/lib/pjma-prisma-client', () => ({
    default: {
      SecretKeyLicense: {
        create: vi.fn(),
        delete: vi.fn(),
      },
    },
  }));

  vi.mock('uuid', () => ({
    v7: () => 'uuidv7',
  }));
});

afterEach(() => {
  // Clear mocks before each test to ensure test isolation
  vi.clearAllMocks();
});

describe('createSecretKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.create function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(createSecretKey({ key: 'test-key', app_name: 'test-app' })).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.create).not.toHaveBeenCalled();
  });

  it('Should call pjmaDBPrismaClient.SecretKeyLicense.create function correctly', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(1744853503149);
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });

    await createSecretKey({ key: 'a9T7vX3kLp2WzB6dQe8MfYrJc0UhNs4g', app_name: 'test-app' });

    expect(pjmaDBPrismaClient.SecretKeyLicense.create).toHaveBeenCalledWith({
      data: {
        key: 'a9T7vX3kLp2WzB6dQe8MfYrJc0UhNs4g',
        app_name: 'test-app',
        product_id: 'uuidv7',
        created_at: BigInt(Math.floor(new Date().getTime() / 1000)),
      },
    });

    vi.useRealTimers();
  });
});

describe('deleteSecretKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.delete function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(deleteSecretKey('1')).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.delete).not.toHaveBeenCalled();
  });

  it('Should call pjmaDBPrismaClient.SecretKeyLicense.delete function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });

    await deleteSecretKey('1');

    expect(pjmaDBPrismaClient.SecretKeyLicense.delete).toHaveBeenCalledWith({
      where: { id: BigInt(1) },
    });
  });
});
