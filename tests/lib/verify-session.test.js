import {
  describe,
  it,
  expect,
  vi,
  afterEach,
  beforeAll,
} from 'vitest';
import verifySession from '@/lib/verifySession';

describe('verifySession function', () => {
  beforeAll(() => {
    vi.mock('next-auth', () => ({
      getServerSession: vi.fn(),
    }));

    vi.mock('@/app/api/auth/[...nextauth]/route', () => ({
      authOptions: { test: 'value' },
    }));

    vi.mock('server-only', () => ({}));
  });

  afterEach(() => {
    // Clear mocks before each test to ensure test isolation
    vi.clearAllMocks();
  });

  it('Should call getServerSession correctly with authOptions and return false when getServerSession returns null', async () => {
    const { getServerSession } = await import('next-auth');
    getServerSession.mockResolvedValue(null);
    const result = await verifySession();

    expect(getServerSession).toHaveBeenCalledWith({ test: 'value' });
    expect(result).toBe(false);
  });

  it('Should return object correctly with isAuth: true and userId from session.user.id when getServerSession returns a session object', async () => {
    const { getServerSession } = await import('next-auth');
    const mockSession = { user: { id: '123' } };
    getServerSession.mockResolvedValue(mockSession);

    const result = await verifySession();

    expect(getServerSession).toHaveBeenCalled();
    expect(result).toEqual({ isAuth: true, userId: '123' });
  });
});
