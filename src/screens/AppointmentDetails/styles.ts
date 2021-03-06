import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const ShareButton = styled(BorderlessButton)``;

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const BannerContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.heading};
  line-height: 21px;
`;

export const PlayersList = styled.FlatList`
  margin-left: 24px;
  margin-top: 27px;
`;

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`;