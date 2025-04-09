import { countLicenseKeys, getLicenseKeys } from '@/lib/services/license-key-service';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const pageIndex = parseInt(searchParams.get('pi'));
  const pageSize = parseInt(searchParams.get('ps'));
  const licenseKeys = await getLicenseKeys({
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
  const numberLicenseKeys = await countLicenseKeys();

  return Response.json({
    message: 'success',
    data: {
      licenseKeys,
      rowCount: numberLicenseKeys,
    },
  });
}
