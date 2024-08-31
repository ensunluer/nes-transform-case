// third party
import { Select, Tag } from 'antd';
import styled, { createGlobalStyle, css } from 'styled-components';
//types
import { SelectType, SelectTypeEnum } from './types.ts';

export const GlobalStyle = createGlobalStyle`
    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: hidden;

        --background-color: #ffffff;
        --text-primary: #101828;
        --text-secondary: #344054;
        --text-tertiary: #475467;
        --text-green: #17B26A;
        --item-background: #f5f5f5;
        --bg-quaternary: #EAECF0;
        --select-bg-color: #ffffff;
        --select-border-color: #D0D5DD;
        --select-hover-color: #D6BBFB;
        --select-placeholder-color: #667085;
        --select-dropdown-border-border: #EAECF0;
        --select-dropdown-scrollbar-thumb: #EAECF0;
    }

    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    .rc-virtual-list-scrollbar-thumb {
        background: var(--bg-quaternary) !important;
    }
    
    .ant-select-dropdown {
        box-shadow: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03);
        border-radius: 8px;
        border: 1px solid var(--bg-quaternary);

        .ant-select-item {
            padding: 8px 10px;
            border-radius: 6px;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 24px;
    gap: 16px;
    box-sizing: border-box;
`;

export const Item = styled.div`
    background-color: var(--item-background);
    padding: 12px 16px;
    border-radius: 8px;
    width: 100%;
`;

export const SelectWrapper = styled.div<{ type?: SelectType }>`
    position: relative;
    width: 100%;
    ${({ type }) => type === SelectTypeEnum.search && css`
        .ant-select-selection-search {
            padding-left: 30px; 
        }

        .ant-select-selection-item {
            padding-left: 30px !important; 
        }
    `}
    ${({ type }) => type === SelectTypeEnum.tags && css`
        .ant-select-selection-overflow {
            padding-left: 38px; 
        }
    `}
`;

export const StyledSelect = styled(Select)`
    --ant-color-primary: var(--select-hover-color);
    --ant-color-primary-hover: rgba(158, 119, 237, 0.24);
    --ant-control-outline: rgba(228, 221, 247);
    --ant-border-radius: 8px;

    && {
        width: 100%;
        min-height: 44px !important;

        .ant-select-selector {
            min-height: 44px !important;
        }
    }
`;

export const PrefixIcon = styled.div`
    position: absolute;
    display: block;
    top: 50%;
    left: 14px;
    z-index: 9;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
`;

export const SelectContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px
`;

export const Label = styled.p`
    display: block;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    font-style: normal;
    font-weight: 500;
    color: var(--text-secondary);
`;

export const HelperText = styled.span<{ error?: boolean | undefined }>`
    display: block;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 20px;
    margin-top: 2px;
    color: ${({ error }) => error ? 'red' : 'var(--text-tertiary)'};
`;

export const Placeholder = styled.div<{ $dotted?: string, $prefix?: string }>`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--select-placeholder-color);
    padding-left: ${({ $prefix }) => $prefix === 'true' ? '30px' : 'revert'};
    ${({ $dotted }) =>
  $dotted === 'true' &&
  css`
      top: 42px;
      left: 12px;

      &:before {
          content: '';
          display: inline-block;
          width: 8px;
          margin-right: 8px;
          height: 8px;
          background: var(--text-green);
          border-radius: 50%;
      }
  `}
`;

export const LabelRender = styled.div`
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 8px;

    p {
        margin: 0;
        padding: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--text-primary);

        span {
            margin-left: 8px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--text-tertiary);
        }
    }

    svg {
        display: block;
        margin-left: auto;
        width: 20px;
        height: 20px;
    }
`;

export const Avatar = styled.img<{ size?: 'small', defaultSrc?: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${({ size }) => size === 'small' && css`
        width: 18px;
        height: 18px;
    `}
`;

export const Dot = styled.span`
    width: 8px;
    height: 8px;
    background: #17B26A;
    border-radius: 50%;
`;

export const StyledTag = styled(Tag)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 4px 2px 5px;

    background: var(--background-color) !important;
    border: 1px solid var(--select-border-color) !important;
    border-radius: 6px;

    span {
        display: inline-block;
        margin: 0;
        padding-left: 5px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: var(--text-secondary);
    }
`;
