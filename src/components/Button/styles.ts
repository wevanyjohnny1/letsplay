import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonBox = styled(RectButton)`
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;

  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;

  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text500};

  font-size: ${RFValue(15)}px;
`;
