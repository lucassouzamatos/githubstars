import { render } from '@testing-library/react';
import { Modal } from 'components';

describe('Modal Component', () => {
  test('should not display the modal if opened is false', () => {
    const onClose = jest.fn();
    const onCreateTags = jest.fn();
    const onRemoveTag = jest.fn();
    const title = 'modal test';

    const { container } = render(
      <Modal
        title={title}
        opened={false}
        onClose={onClose}
        onCreateTags={onCreateTags}
        onRemoveTag={onRemoveTag}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  test('should display the modal if opened is true', () => {
    const onClose = jest.fn();
    const onCreateTags = jest.fn();
    const onRemoveTag = jest.fn();
    const title = 'modal test';

    const { container } = render(
      <Modal
        title={title}
        opened={true}
        onClose={onClose}
        onCreateTags={onCreateTags}
        onRemoveTag={onRemoveTag}
      />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
