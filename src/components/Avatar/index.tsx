import React from 'react';
import theme from '../../global/styles/theme';
import { Container, UserImage } from './styles';

type Props = {
  urlImage: string;
}

export function Avatar({ urlImage }: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <Container
      colors={[secondary50, secondary70]}
    >
      <UserImage
        source={{ uri: urlImage }}
      />
    </Container>
  )
}