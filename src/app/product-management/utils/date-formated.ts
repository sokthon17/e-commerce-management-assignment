import { format, parseISO } from 'date-fns';

export function dateFormat(date: string) {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'dd MMM yyyy');
}
