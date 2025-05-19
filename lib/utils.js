import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// get phoneNumbers from sign in with google feature
export function getPhoneNumber(phoneNumbers) {
  if (!phoneNumbers) return null;

  let phoneNumber = null;

  for (const pn of phoneNumbers) {
    if (pn.metadata.verified) {
      phoneNumber = pn.canonicalForm;
      break;
    }
  }

  return phoneNumber;
}

export function generateBreadcrumb(pathname) {
  // if pathname is '/'
  if (pathname === '/') return [{ breadCrumb: 'Dashboard' }];

  const pathnames = pathname.substring(1).split('/');
  // if page is edit page
  if (/edit/.test(pathname)) pathnames.splice(1, 1);

  return pathnames.map((path, i) => {
    let newPath = { path: '/' + path };

    // uppercase each first letter of word
    if (/-/.test(path)) {
      let paths = path.split('-');
      newPath.breadCrumb = paths.map(p => {
        const firstLetter = p[0].toUpperCase();
        return firstLetter + p.substring(1);
      }).join(' ');
    } else {
      newPath.breadCrumb = path[0].toUpperCase() + path.substring(1);
    }

    // if last path, then return directly only breadCrumb without original path
    if (i === pathnames.length - 1) {
      delete newPath.path;
      return newPath;
    }
    return newPath;
  });
}

export const bigIntJsonReplacer = (_, value) => (typeof value === 'bigint' ? value.toString() : value);

export function generatePageInfo({
  pageIndex,
  totalDataPerPage,
  totalData,
  searchKey,
  isTooMany,
}) {
  if (totalDataPerPage < 1) return null;

  if (searchKey) {
    if (isTooMany) {
      return `1-${totalDataPerPage} results (limited)`;
    }
    return `${totalDataPerPage} results`;
  }

  // start and end data for each page
  let startData = (pageIndex * process.env.NEXT_PUBLIC_PAGE_SIZE) + 1;
  let endData = (startData - 1) + totalDataPerPage;

  return `${startData}-${endData} of ${totalData} results`;
}

export function isLastPage({ pageIndex, pageSize, rowCount }) {
  return pageIndex + 1 === Math.ceil(rowCount/pageSize);
}
