import { render, screen } from '@testing-library/react';
import { ErrorMessage } from 'components';

describe('ErrorMessage Component', () => {
  test('should display an error message with defined text', () => {
    const testMessage = 'Test Message';
    render(<ErrorMessage>{testMessage}</ErrorMessage>);
    expect(screen.queryByText(testMessage)).toBeInTheDocument();
  });
});
