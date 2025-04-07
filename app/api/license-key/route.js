import { getLicenseKeys } from '@/lib/services/license-key-service';

export async function GET(req) {
  await new Promise(resolve => {
    setTimeout(() => resolve(true), 4000);
  });

  const searchParams = req.nextUrl.searchParams;
  const pageIndex = parseInt(searchParams.get('pi'));
  const pageSize = parseInt(searchParams.get('ps'));
  const licenseKey = await getLicenseKeys({
    select: {
      id: true,
      email: true,
      key: true,
      used_for_activate: true,
      used_for_download: true,
      created_at: true,
    },
    pageIndex,
    pageSize,
  });

  return Response.json(licenseKey);
}
