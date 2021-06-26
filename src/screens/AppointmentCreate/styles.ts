import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const ContainerAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const Select = styled.View`
  border-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  overflow: hidden;
`;

export const SelectButton = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  height: 68px;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
`;

export const SelectImage = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const FieldText = styled.View`

`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const ButtonContainer = styled.View`
  margin: 20px 0;
  margin-bottom: 56px;
`;