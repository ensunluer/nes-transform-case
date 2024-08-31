import type { SelectProps } from 'antd/es/select';

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  image: string;
}

export type UserReturnType = IUserItem[];

export interface OptionType {
  id?: number;
  title?: string;
  value?: string | number;
  label?: string | JSX.Element;
  dot?: boolean;
}

export type ChangeType = {
  option?: OptionType;
  label?: {
    props?: {
      option?: unknown;
    };
  };
};

export enum SelectTypeEnum {
  default = 'default',
  dotted = 'dotted',
  search = 'search',
  tags = 'tags',
}

export type SelectType = keyof typeof SelectTypeEnum;

export interface CustomSelectProps extends SelectProps {
  options?: OptionType[];
  label?: string;
  error?: boolean;
  type?: SelectType;
  helperText?: string;
  prefixIcon?: React.ReactNode;
}


