import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { Background } from '../Background';

import { Container, Overlay, ContentContainer, Bar } from './styles';

type Props = ModalProps & {
  children: ReactNode;
}

export function ModalView({ children, ...rest }: Props) {
  return (
    <Container
      transparent
      animationType="slide"
      {...rest}
    >
      <Overlay>
        <ContentContainer>
          <Background>
            <Bar />
            {children}
          </Background>
        </ContentContainer>
      </Overlay>
    </Container>
  )
}