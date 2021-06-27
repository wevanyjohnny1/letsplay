import styled from 'styled-components/native';

export const Content = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.discord};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled.Image`
  width: 64px;
  height: 64px;
`;