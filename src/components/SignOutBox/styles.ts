import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 24px;

  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.heading}
`;

export const TitleRed = styled.Text`
  margin-top: 24px;

  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;

  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ButtonBorder = styled(LinearGradient)`
  width: ${RFValue(160)}px;
  height: ${RFValue(56)}px;
  margin-right: 4px;

  border-radius: 7px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary30};
`;

export const ButtonNo = styled(RectButton)`
  flex: 1;

  /* background-color: ${({ theme }) => theme.colors.secondary80}; */

  border-radius: 8px;

  align-items: center;
  flex-direction: row;
`;

export const ButtonYes = styled(RectButton)`
  width: ${RFValue(160)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.heading};

  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  margin-left: 4px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;

  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text500};

  font-size: ${RFValue(15)}px;
  `;