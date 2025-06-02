import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import {
  createSecretKey,
  deleteSecretKey,
  getSecretKeys,
  getSpecificSecretKey,
} from '@/lib/services/secret-key-service';

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
        findMany: vi.fn(),
        findUnique: vi.fn(),
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
    pjmaDBPrismaClient.SecretKeyLicense.create.mockResolvedValue({ id: 1n });

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
      select: { id: true },
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

describe('getSecretKeys function', () => {
  it('should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.findMany function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(getSecretKeys({
      id: true,
      app_name: true,
    })).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.findMany).not.toHaveBeenCalled();
  });

  it('should call pjmaDBPrismaClient.LicenseKey.findMany function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });
    pjmaDBPrismaClient.SecretKeyLicense.findMany.mockResolvedValue([{
      id: 2n,
      app_name: '12345',
    }]);

    await getSecretKeys({
      id: true,
      app_name: true,
    });

    expect(pjmaDBPrismaClient.SecretKeyLicense.findMany).toHaveBeenCalledWith({
      select: {
        id: true,
        app_name: true,
      },
      orderBy: { created_at: 'desc' },
    });
  });
});

describe('getSpecificSecretKey function', () => {
  it('should call verifySession function, not call pjmaDBPrismaClient.SecretKeyLicense.findUnique function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(getSpecificSecretKey(
      '1',
      { key: true },
    )).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.SecretKeyLicense.findUnique).not.toHaveBeenCalled();
  });

  it('should call pjmaDBPrismaClient.LicenseKey.findUnique function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });
    pjmaDBPrismaClient.SecretKeyLicense.findUnique.mockResolvedValue({
      key: '12345',
    });

    await getSpecificSecretKey(
      '2',
      { key: true },
    );

    expect(pjmaDBPrismaClient.SecretKeyLicense.findUnique).toHaveBeenCalledWith({
      where: { id: 2n },
      select: { key: true },
    });
  });
});
