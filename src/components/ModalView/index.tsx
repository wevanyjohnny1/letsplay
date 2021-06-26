import React, { ReactNode } from 'react';
import { ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';

import { Container, Overlay, ContentContainer, Bar } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
  return (
    <Container
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <Overlay>
          <ContentContainer>
            <Background>
              <Bar />
              {children}
            </Background>
          </ContentContainer>
        </Overlay>
      </TouchableWithoutFeedback>
    </Container>
  )
}