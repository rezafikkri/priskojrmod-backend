import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDateTimeWIB(epoch) {
  return dayjs.unix(epoch).tz('Asia/Jakarta').format('DD MMM YYYY HH:mm [WIB]');
}

export function formatDate(epoch) {
  return dayjs.unix(epoch).format('DD MMM YYYY');
}
