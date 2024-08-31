import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoading = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid var(--text-secondary);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;
`;

const Loading = () => {
  return (
    <StyledLoading />
  );
};

export default Loading;
