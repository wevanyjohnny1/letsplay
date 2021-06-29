import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

export const ContentContainer = styled.View`
  flex: 1;
  margin-top: 642px;
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
