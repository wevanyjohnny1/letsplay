import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

export function AddButton({ ...rest }: RectButtonProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </Container>
  )
}