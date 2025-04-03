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
    pjmaDBPrismaClient: {
      SecretKeyLicense: {
        create: vi.fn(),
        delete: vi.fn(),
      },
    },
  }));

  vi.mock('@/lib/validators/secret-key-validator', () => ({
    secretKeySchema: { parse: vi.fn() },
  }));

  vi.mock('uuid', () => ({
    v7: () => 'uuidv7',
  }));

  vi.mock('next/cache', () => ({
    revalidatePath: () => {},
    unstable_cache: () => {},
  }));
});

afterEach(() => {
  // Clear mocks before each test to ensure test isolation
  vi.clearAllMocks();
});

describe('createSecretKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.create function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');

    verifySession.mockResolvedValue(false);

    await expect(createSecretKey({ key: 'test-key', app_name: 'test-app' })).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.create).not.toHaveBeenCalled();
  });

  it('Should call pjmaDBPrismaClient.SecretKeyLicense.create function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');
    const { secretKeySchema } = await import('@/lib/validators/secret-key-validator');

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });

    secretKeySchema.parse.mockReturnValue({ key: 'test-key', app_name: 'test-app' });

    await createSecretKey({ key: 'test-key', app_name: 'test-app' });

    expect(pjmaDBPrismaClient.SecretKeyLicense.create).toHaveBeenCalledWith({
      data: {
        key: 'test-key',
        app_name: 'test-app',
        product_id: 'uuidv7',
        created_at: expect.any(BigInt),
      },
    });
  });
});

describe('deleteSecretKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.delete function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');

    verifySession.mockResolvedValue(false);

    await expect(deleteSecretKey('secret-key-id')).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.delete).not.toHaveBeenCalled();
  });

  it('Should call pjmaDBPrismaClient.SecretKeyLicense.delete function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });

    await deleteSecretKey('secret-key-id');

    expect(pjmaDBPrismaClient.SecretKeyLicense.delete).toHaveBeenCalledWith({
      where: { id: 'secret-key-id' },
    });
  });
});
