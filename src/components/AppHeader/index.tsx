import React, { ReactNode } from 'react';
import { View } from 'react-native';
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

import { Container, GoBackButton, Title, Action } from './styles';
import { useNavigation } from '@react-navigation/native';

// import { Background } from '../../components/Background';

type Props = {
  title: string;
  action?: ReactNode;
}

export function AppHeader({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container
      colors={[secondary100, secondary40]}
    >
      <GoBackButton
        onPress={handleGoBack}
      >
        <Feather
          name="arrow-left"
          size={24}
          color={heading}
        />
      </GoBackButton>
      <Title>
        {title}
      </Title>

      {
        action
          ?
          <Action>
            {action}
          </Action>
          :
          <View style={{ width: 24 }} />
      }
    </Container>
  )
}