import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../global/styles/theme';

import { Container } from './styles';

export function Load() {
  return (
    <Container>
      <ActivityIndicator
        size="large"
        color={theme.colors.primary}
      />
    </Container>
  )
}