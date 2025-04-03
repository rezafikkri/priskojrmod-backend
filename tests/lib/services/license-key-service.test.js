import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import { createLicenseKey } from '@/lib/services/license-key-service';

beforeAll(() => {
  vi.mock('server-only', () => ({}));

  vi.mock('@/lib/verifySession', () => ({
    default: vi.fn(),
  }));

  vi.mock('@/lib/pjma-prisma-client', () => ({
    pjmaDBPrismaClient: {
      LicenseKey: {
        create: vi.fn(),
        delete: vi.fn(),
      },
    },
  }));

  vi.mock('@/lib/validators/license-key-validator', () => ({
    licenseKeySchema: { parse: vi.fn() },
  }));

  vi.mock('@/lib/services/secret-key-service', () => ({
    getSpecificSecretKey: vi.fn(),
  }));

  vi.mock('jsonwebtoken', () => ({
    default: {
      sign: () => 'jsonwebtoken',
    },
  }));
});
import { createLicenseKey } from '@/lib/services/license-key-service';

afterEach(() => {
  // Clear mocks before each test to ensure test isolation
  vi.clearAllMocks();
});

describe('createLicenseKey function', () => {
  it('Should call verifySession function, not call pjmaDBPrismaClient.LicenseKey.create function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');

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
    const verifySession = (await import('@/lib/verifySession')).default;
    const { pjmaDBPrismaClient } = await import('@/lib/pjma-prisma-client');
    const { licenseKeySchema } = await import('@/lib/validators/license-key-validator');
    const { getSpecificSecretKey } = await import('@/lib/services/secret-key-service');

    verifySession.mockResolvedValue({ isAuth: true, userId: '123' });
    licenseKeySchema.parse.mockReturnValue({
      secret_key_id: '123',
      name: 'adel',
      email: 'adel@gmail.com',
      type:' online',
    });
    getSpecificSecretKey.mockResolvedValue({ key: '123' });

    await createLicenseKey({
      secret_key_id: '123',
      name: 'adel',
      email: 'adel@gmail.com',
      type: 'online',
    });

    expect(pjmaDBPrismaClient.LicenseKey.create).toHaveBeenCalledWith({
      data: {
        secret_key_id: '123',
        email: 'adel@gmail.com',
        key: 'jsonwebtoken',
      },
    });
  });
});
