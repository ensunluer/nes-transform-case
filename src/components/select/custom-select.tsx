import { useState } from 'react';
import { ConfigProvider } from 'antd';
// styles
import { SelectContainer, HelperText, Label, Placeholder, PrefixIcon, SelectWrapper, StyledSelect } from  '../../style.tsx';
//icons
import ArrowDown from '../../assets/arrow-down.svg';
import CheckIcon from '../../assets/check.svg';
// types
import { ChangeType, CustomSelectProps, SelectTypeEnum } from '../../types.ts';

const CustomSelect = (
  {
    mode,
    label,
    options,
    error = false,
    showSearch = false,
    prefixIcon,
    type = 'default',
    placeholder = 'Select a team member',
    helperText = 'This is a hint text to help user.',
    ...rest
  }: CustomSelectProps) => {

  const [option, setOption] = useState<ChangeType | null>(null);

  const handleChange = (value: ChangeType) => {
    if (value?.label?.props?.option) {
      setOption(value.label.props.option);
    }
  };

  const showPrefixIcon = type === (SelectTypeEnum.search || SelectTypeEnum.tags) ? true : !option;
  return (
    <SelectContainer>
      {label && <Label>{label}</Label>}
      <SelectWrapper type={type || prefixIcon}>
        {showPrefixIcon && prefixIcon && <PrefixIcon>{prefixIcon}</PrefixIcon>}
        <ConfigProvider theme={{
          token: {
            fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            paddingSM: 14,
          },
          components: {
            Select: {
              optionSelectedBg: '#F9FAFB',
            },
          },
          cssVar: true,
        }}>
          <StyledSelect
            labelInValue
            mode={mode}
            options={options}
            showSearch={showSearch}
            popupMatchSelectWidth={true}
            placeholder={
              <Placeholder
                $prefix={prefixIcon ? 'true' : undefined}
                $dotted={type === SelectTypeEnum.dotted ? 'true' : undefined}
              >
                {placeholder}
              </Placeholder>
            }
            onChange={(value) => handleChange(value as ChangeType)}
            suffixIcon={<ArrowDown />}
            menuItemSelectedIcon={<CheckIcon />}
            {...rest}
          />
        </ConfigProvider>
      </SelectWrapper>
      {(error || helperText) && (
        <HelperText error={error ? true : undefined}>
          {error ? 'There is an error' : helperText}
        </HelperText>
      )}
    </SelectContainer>
  );
};

export default CustomSelect;
