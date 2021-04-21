import { fireEvent, render } from '@testing-library/react';
import { InputSearch } from 'components';

describe('InputSearch Component', () => {
  test('should submit text search when clicked in search button', () => {
    const onSearchMock = jest.fn();
    const data = [{ tags: [{ id: '1', name: 'test' }] }];

    const component = render(
      <InputSearch placeholder="test" onSearch={onSearchMock} data={data} />
    );

    fireEvent.change(component.getByRole('textbox'), {
      target: { value: 'test' },
    });

    fireEvent.click(component.getByRole('button'));

    expect(onSearchMock).toBeCalled();
    expect(onSearchMock).toBeCalledWith('test');
  });
});
