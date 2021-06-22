import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  line-height: 50px;
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: ${RFValue(40)}px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: ${RFValue(15)}px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 64px;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
`;
