import { fireEvent, render, screen } from '@testing-library/react';
import { InputPrefix } from 'components';

describe('InputPrefix Component', () => {
  test('should fire event when changed', () => {
    const onChangeMock = jest.fn();

    const altText = 'test alt';
    render(<InputPrefix prefix={altText} onChange={onChangeMock} />);

    fireEvent.change(screen.getByLabelText(altText), {
      target: { value: 'test' },
    });

    expect(onChangeMock).toBeCalled();
  });

  test('should change value when event change is called', () => {
    const onChangeMock = jest.fn();

    const altText = 'test alt';
    render(<InputPrefix prefix={altText} onChange={onChangeMock} />);

    const input = screen.getByLabelText(altText) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'test' },
    });

    expect(input.value).toBe('test');
  });

  test('should has a prefix', () => {
    const onChangeMock = jest.fn();

    const testMessage = 'test alt';
    render(<InputPrefix prefix={testMessage} onChange={onChangeMock} />);

    expect(screen.queryByText(testMessage)).toBeInTheDocument();
  });
});
