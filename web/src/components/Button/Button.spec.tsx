import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from 'components';

describe('Button Component', () => {
  test('should display a button with defined text', () => {
    const testMessage = 'Test Message';
    render(<Button text={testMessage} />);
    expect(screen.queryByText(testMessage)).toBeInTheDocument();
  });

  test('should fire event when clicked', () => {
    const onClickMock = jest.fn();

    const testMessage = 'Test Message';
    render(<Button onClick={onClickMock} text={testMessage} />);
    fireEvent.click(screen.getByText(testMessage));

    expect(onClickMock).toBeCalled();
  });
});
