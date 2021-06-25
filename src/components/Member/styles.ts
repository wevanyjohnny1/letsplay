import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ContentText = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(18)}px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${RFValue(13)}px;
`;

export const StatusBuble = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;