import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from 'components';

describe('Input Component', () => {
  test('should fire event when changed', () => {
    const onChangeMock = jest.fn();

    const altText = 'test alt';
    render(<Input aria-label={altText} onChange={onChangeMock} />);

    fireEvent.change(screen.getByLabelText(altText), {
      target: { value: 'test' },
    });

    expect(onChangeMock).toBeCalled();
  });

  test('should change value when event change is called', () => {
    const onChangeMock = jest.fn();

    const altText = 'test alt';
    render(<Input aria-label={altText} onChange={onChangeMock} />);

    const input = screen.getByLabelText(altText) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'test' },
    });

    expect(input.value).toBe('test');
  });
});
