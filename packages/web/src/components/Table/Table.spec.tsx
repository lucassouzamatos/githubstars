import { render, within } from '@testing-library/react';
import { Table } from 'components';

describe('Table Component', () => {
  test('should display the children', () => {
    const children = (
      <thead>
        <tr>
          <th>thead</th>
        </tr>
      </thead>
    );
    const { container } = render(<Table>{children}</Table>);

    expect(within(container).getByText('thead')).toBeTruthy();
  });
});
