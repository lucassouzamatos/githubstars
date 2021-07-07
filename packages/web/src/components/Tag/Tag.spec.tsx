import { fireEvent, render } from '@testing-library/react';
import { Tag } from 'components';

describe('Tag Component', () => {
  test('should call onremove when the button is pressed', () => {
    const onRemove = jest.fn();

    const component = render(
      <Tag onRemove={onRemove} close={true}>
        test
      </Tag>
    );

    fireEvent.click(component.getByRole('button'));

    expect(onRemove).toBeCalled();
  });
});
