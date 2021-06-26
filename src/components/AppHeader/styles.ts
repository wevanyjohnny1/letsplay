import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding-top: ${getStatusBarHeight()}px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoBackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Action = styled.View``;