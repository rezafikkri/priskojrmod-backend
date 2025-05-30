import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import {
  createFaq,
  deleteFaq,
  updateFaq,
} from '@/lib/services/faq-service';

beforeAll(() => {
  vi.mock('server-only', () => ({}));

  vi.mock('@/lib/verifySession', () => ({
    default: vi.fn(),
  }));

  vi.mock('@/lib/pjme-prisma-client', () => ({
    default: {
      Faq: {
        create: vi.fn(),
        delete: vi.fn(),
        update: vi.fn(),
      },
      $transaction: vi.fn(),
      FaqTranslation: {
        update: vi.fn(),
      },
    },
  }));
});

afterEach(() => {
  vi.clearAllMocks();
  vi.useRealTimers();
});

describe('createFaq function', () => {
  it('Should call verifySession function, not call pjmeDBPrismaClient.Faq.create function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(createFaq({
      title: {
        id: 'judul',
        en: 'title',
      },
      content: {
        id: 'konten',
        en: 'content',
      },
    })).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmeDBPrismaClient.Faq.create).not.toHaveBeenCalled();
  });

  it('Should call pjmeDBPrismaClient.Faq.create function correctly', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(1744853503149);

    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true });

    await createFaq({
      title: {
        id: 'Judul ID',
        en: 'Title EN',
      },
      content: {
        id: 'Konten ID',
        en: 'Content EN',
      },
    });

    expect(pjmeDBPrismaClient.Faq.create).toHaveBeenCalledWith({
      data: {
        created_at: BigInt(Math.floor(new Date().getTime() / 1000)),
        translations: {
          create: [
            { language: 'ID', title: 'Judul ID', content: 'Konten ID' },
            { language: 'EN', title: 'Title EN', content: 'Content EN' },
          ],
        },
      },
      select: {
        id: true,
      },
    });
  });
});

describe('deleteFaq function', () => {
  it('Should call verifySession function, not call pjmeDBPrismaClient.Faq.delete function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(deleteFaq(1)).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmeDBPrismaClient.Faq.delete).not.toHaveBeenCalled();
  });

  it('Should call pjmeDBPrismaClient.Faq.delete function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true });

    await deleteFaq(1);

    expect(pjmeDBPrismaClient.Faq.delete).toHaveBeenCalledWith({
      where: { id: 1 },
      select: { id: true },
    });
  });
});

describe('updateFaq function', () => {
  it('Should call verifySession function, not call pjmeDBPrismaClient.AboutUs.$transaction and pjmeDBPrismaClient.AboutUs.update function and throw Error with "Unauthenticated" message', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue(false);

    await expect(updateFaq({})).rejects.toThrow('Unauthenticated');

    expect(verifySession).toHaveBeenCalled();
    expect(pjmeDBPrismaClient.$transaction).not.toHaveBeenCalled();
    expect(pjmeDBPrismaClient.Faq.update).not.toHaveBeenCalled();
  });

  it('Should call pjmeDBPrismaClient.Faq.update function correctly', async () => {
    const verifySession = (await import('@/lib/verifySession')).default;
    const pjmeDBPrismaClient = (await import('@/lib/pjme-prisma-client')).default;

    verifySession.mockResolvedValue({ isAuth: true });

    await updateFaq({
      id: 123,
      translationId: {
        id: 1,
        en: 2,
      },
      title: {
        id: 'Judul ID',
        en: 'Title EN',
      },
      content: {
        id: 'Konten ID',
        en: 'Content EN',
      },
    });

    expect(pjmeDBPrismaClient.$transaction).toHaveBeenCalled();
    expect(pjmeDBPrismaClient.FaqTranslation.update).toBeCalledTimes(2);
    expect(pjmeDBPrismaClient.FaqTranslation.update).toHaveBeenCalledWith({
      where: { id: 1, faq_id: 123 },
      data: {
        title: 'Judul ID',
        content: 'Konten ID',
      },
      select: { id: true },
    });
    expect(pjmeDBPrismaClient.FaqTranslation.update).toHaveBeenCalledWith({
      where: { id: 2, faq_id: 123 },
      data: {
        title: 'Title EN',
        content: 'Content EN',
      },
      select: { id: true },
    });
  });
});
