// styles
import { Avatar, Dot, LabelRender } from '../../style.tsx';
// icons
import UserIcon from '../../assets/user-profile.svg';
// types
import { OptionType } from '../../types.ts';

type OptionsProps = {
  option: OptionType;
}

const Options = ({ option }: OptionsProps) => (
  <LabelRender>
    {option?.value && option?.value !== 'default' &&
      <Avatar
        alt="user"
        src={typeof option?.value === 'string' ? option?.value : ''}
      />
    }
    {option?.value === 'default' && <span><UserIcon /></span>}
    {option?.dot && <Dot />}
    <p>
      {option?.title}
      <span>@{option?.label}</span>
    </p>
  </LabelRender>
);

export default Options;