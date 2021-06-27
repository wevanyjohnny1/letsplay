import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContentBox = styled.View`
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(18)}px;
  margin-bottom: 4px;
`;

export const Type = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${RFValue(13)}px;
  margin-bottom: 12px;
`;
