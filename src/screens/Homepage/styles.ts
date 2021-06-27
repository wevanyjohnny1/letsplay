import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View``;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(26)}px;
`;

export const Content = styled.View``;

// export const GameContent = styled.View`
//   margin-top: 42px;
// `;

export const GameBox = styled.FlatList`
  margin-top: 24px;
  margin-left: 24px;
`;