import { ReactNode } from 'react';

export type TableCell = {
  th?: ReactNode;
  td?: ReactNode;
};
export type TableRow = TableCell[];

export interface TableHeader {
  label: string;
  bulkSelect?: React.ReactNode;
  sort?: () => void;
}
