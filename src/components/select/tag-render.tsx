import { isValidElement, useMemo } from 'react';
// third-party
import { SelectProps } from 'antd/es/select';
// styles
import { Avatar, StyledTag } from '../../style.tsx';
// icons
import CloseIcon from '../../assets/close.svg';
// types
import { ChangeType } from '../../types.ts';

type TagRender = SelectProps['tagRender'];

const TagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const memoizedUser = useMemo(() => {
    if (isValidElement<ChangeType>(label)) {
      const { option } = label.props;
      const nameParts = option?.title ? option?.title?.split(' ') : undefined;
      const firstName = nameParts ? (nameParts[0] === 'Mr.' || nameParts[0] === 'Mrs.') ? nameParts[1] : nameParts[0] : undefined;
      return {
        ...option,
        title: firstName,
      };
    }
    return undefined;
  }, [label]);

  return (
    <StyledTag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      closeIcon={<CloseIcon />}
      style={{ marginInlineEnd: 4 }}
    >
      <Avatar size="small" src={typeof memoizedUser?.value === 'string' ? memoizedUser?.value : ''} alt="user" />
      <span>{memoizedUser?.title}</span>
    </StyledTag>
  );
};

export default TagRender;