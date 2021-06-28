import React, { Children, ReactNode } from 'react';
import { ModalProps, TouchableWithoutFeedback } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Background } from '../Background';

import { Container, Overlay, ContentContainer, ButtonYes, ButtonText } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalLogout({ children, closeModal, ...rest }: Props) {
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
              {children}
            </Background>
          </ContentContainer>
        </Overlay>
      </TouchableWithoutFeedback>
    </Container>
  )
}