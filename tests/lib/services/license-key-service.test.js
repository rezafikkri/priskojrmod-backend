import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import {
  createLicenseKey,
  getLicenseKeys,
  searchLicenseKeys,
  deleteLicenseKey,
} from '@/lib/services/license-key-service';

beforeAll(() => {
  vi.mock('server-only', () => ({}));

  vi.mock('@/lib/verifySession', () => ({
    default: vi.fn(),
  }));

  vi.mock('@/lib/pjma-prisma-client', () => ({
    default: {
      LicenseKey: {
        create: vi.fn(),
        delete: vi.fn(),
        findMany: vi.fn(),
      },
    },
  }));

  vi.mock('@/lib/services/secret-key-service', () => ({
    getSpecificSecretKey: vi.fn(),
  }));

  vi.mock('jsonwebtoken', () => ({
    default: {
      sign: () => 'jsonwebtoken',
    },
  }));

  vi.mock('next/cache', () => ({
    unstable_cache: (fn) => fn,
    revalidateTag: () => {},
  }));
});

afterEach(() => {
  // Clear mocks before each test to ensure test isolation
  vi.clearAllMocks();
  vi.useRealTimers();
});

describe('createLicenseKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.LicenseKey.create function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(createLicenseKey({
      secret_key_id: '123',
      name: 'reza',
      email: 're@co.co',
      type: 'online',
    })).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.LicenseKey.create).not.toHaveBeenCalled();
  });

  it('Should call pjmaDBPrismaClient.LicenseKey.create function correctly', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(1744853503149);
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;
    const { getSpecificSecretKey } = await import('@/lib/services/secret-key-service');

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });
    getSpecificSecretKey.mockResolvedValue({ key: '123' });
    pjmaDBPrismaClient.LicenseKey.create.mockResolvedValue({
      secret_key_id: 1n,
      created_at: 123456789n,
    });

    await createLicenseKey({
      secret_key_id: '2',
      name: 'adel',
      email: 'adel@gmail.com',
      type: 'online',
    });

    expect(pjmaDBPrismaClient.LicenseKey.create).toHaveBeenCalledWith({
      data: {
        secret_key_id: BigInt(2),
        email: 'adel@gmail.com',
        key: 'jsonwebtoken',
        created_at: BigInt(Math.floor(new Date().getTime() / 1000)),
      },
    });
  });
});

describe('getLicenseKeys function', () => {
  it('should call verifySession function, not call pjmaDBPrismaClient.LicenseKey.findMany function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(getLicenseKeys({ select: {}, pageIndex: 0, pageSize: 10 }))
      .rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.LicenseKey.findMany).not.toHaveBeenCalled();
  });

  it('should call pjmaDBPrismaClient.LicenseKey.findMany function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: 'abc' });
    const mockLicenseKeys = [
      { id: '1', created_at: BigInt(123), key: 'key1' },
      { id: '2', created_at: BigInt(456), key: 'key2' },
    ];
    pjmaDBPrismaClient.LicenseKey.findMany.mockResolvedValue(mockLicenseKeys);

    await getLicenseKeys({
      select: { id: true, key: true },
      pageIndex: 1,
      pageSize: 2,
    });

    expect(pjmaDBPrismaClient.LicenseKey.findMany).toHaveBeenCalledWith({
      select: { id: true, key: true },
      orderBy: { created_at: 'desc' },
      take: 2,
      skip: 2,
    });
  });
});

describe('searchLicenseKeys function', () => {
  it('should call verifySession function, not call pjmaDBPrismaClient.LicenseKey.findMany function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(searchLicenseKeys({ select: {}, searchKey: 'test', searchLimit: 5 }))
      .rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.LicenseKey.findMany).not.toHaveBeenCalled();
  });

  it('should call pjmaDBPrismaClient.LicenseKey.findMany function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: 'abc' });
    const mockLicenseKeys = [
      { id: '1', created_at: BigInt(123), key: 'key1' },
      { id: '2', created_at: BigInt(456), key: 'key2' },
    ];
    pjmaDBPrismaClient.LicenseKey.findMany.mockResolvedValue(mockLicenseKeys);

    await searchLicenseKeys({
      select: { id: true, key: true },
      searchKey: 'test',
      searchLimit: 5,
    });

    expect(pjmaDBPrismaClient.LicenseKey.findMany).toHaveBeenCalledWith({
      select: { id: true, key: true },
      where: {
        email: {
          startsWith: 'test',
          mode: 'insensitive',
        },
      },
      take: 6,
    });
  });
});

describe('deleteLicenseKey function', () => {
  it('should call verifySession, not call pjmaDBPrismaClient.LicenseKey.delete function and throw with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(deleteLicenseKey('123')).rejects.toThrowError('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmaDBPrismaClient.LicenseKey.delete).not.toHaveBeenCalled();
  });

  it('should call pjmaDBPrismaClient.LicenseKey.delete function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmaDBPrismaClient = (await import('@/lib/pjma-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true, userId: 'abc' });

    await deleteLicenseKey('123');

    expect(pjmaDBPrismaClient.LicenseKey.delete).toHaveBeenCalledWith({
      where: { id: '123' },
      select: {
        id: true,
        email: true,
      },
    });
  });
});
