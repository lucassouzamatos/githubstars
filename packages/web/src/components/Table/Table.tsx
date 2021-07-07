import { TableWrapper } from './Table.styles';

type TableProps = {
  children: React.ReactNode;
};

export default function Table({ children }: TableProps) {
  return <TableWrapper>{children}</TableWrapper>;
}
