import styled from 'styled-components/native';

export const Container = styled.View`
  width: 78%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  margin: 31px 0;
  margin-top: 5px;
  align-self: flex-end;
`;