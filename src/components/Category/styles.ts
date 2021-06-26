import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  padding-top: 39px;
`;

export const ContentContainer = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled(LinearGradient)`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const CheckBox = styled.View`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 10px;
  height: 10px;
  border-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 2px;
  border-radius: 3px;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(15)}px;
  margin-top: 15px;
`;
