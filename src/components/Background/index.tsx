import React, { ReactNode } from 'react';
import { Container } from './styles';
import theme from '../../global/styles/theme';

interface IBackgroundProps {
  children: ReactNode;
}

export function Background({ children }: IBackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Container
      colors={[secondary80, secondary100]}
    >
      {children}
    </Container>
  )
}