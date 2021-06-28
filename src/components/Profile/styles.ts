import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarContainer = styled.View``;

export const LogoutButton = styled(BorderlessButton)`
  position: absolute;
  padding-left: 35px;
  padding-top: 35px;
`;

export const TextContainer = styled.View`
`;

export const GreetingsContainer = styled.View`
flex-direction: row
`;

export const Greetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.heading};
  margin-right: 6px;
`;
export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.heading};
`;
export const UserStatus = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.heading};
`;