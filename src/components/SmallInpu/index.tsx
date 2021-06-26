import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <Container
      keyboardType="numeric"
      {...rest}
    />
  )
}