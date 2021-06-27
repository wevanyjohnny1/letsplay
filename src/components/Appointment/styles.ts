import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const ContentBox = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(18)}px;
  padding-left: 10px;
`;

export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${RFValue(13)}px;
  margin-right: 24px;
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayerInfoText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(13)}px;
  margin-left: 7px;
  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: ${RFValue(13)}px;
  margin-left: 7px;
`;