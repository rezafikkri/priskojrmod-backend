import { countLicenseKeys, getLicenseKeys, searchLicenseKeys } from '@/lib/services/license-key-service';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const pageIndex = parseInt(searchParams.get('pi'));
  const pageSize = parseInt(searchParams.get('ps'));
  const searchKey = searchParams.get('sk');

  const select = {
    id: true,
    email: true,
    key: true,
    used_for_activate: true,
    used_for_download: true,
    created_at: true,
  };
  let licenseKeys;

  if (searchKey) {
    licenseKeys = await searchLicenseKeys({ select, searchKey });
  } else {
    licenseKeys = await getLicenseKeys({
      select,
      pageIndex,
      pageSize,
    });
  }

  const numberLicenseKeys = await countLicenseKeys();

  return Response.json({
    message: 'success',
    data: {
      licenseKeys,
      rowCount: numberLicenseKeys,
    },
  });
}
