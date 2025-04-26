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
    pjmaDBPrismaClient.SecretKeyLicense.create.mockResolvedValue({
      id: 1n,
      created_at: 123456789n,
    });

    await createSecretKey({
      key: '8f23fcc4c918eb26c991b3950c79a243a6b0d683c2e58e0d31fc367b652e2b05',
      app_name: 'test-app',
    });

    expect(pjmaDBPrismaClient.SecretKeyLicense.create).toHaveBeenCalledWith({
      data: {
        key: '8f23fcc4c918eb26c991b3950c79a243a6b0d683c2e58e0d31fc367b652e2b05',
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
    pjmaDBPrismaClient.SecretKeyLicense.delete.mockResolvedValue({
      id: 2n,
    });

    await deleteSecretKey('1');

    expect(pjmaDBPrismaClient.SecretKeyLicense.delete).toHaveBeenCalledWith({
      where: { id: BigInt(1) },
      select: {
        id: true,
      },
    });
  });
});
