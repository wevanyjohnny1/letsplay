import styled from 'styled-components/native';

export const Container = styled.View`
  width: 78%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  align-self: flex-end;
`;