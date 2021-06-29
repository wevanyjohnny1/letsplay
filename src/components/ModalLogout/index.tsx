import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';

import { Overlay, ContentContainer } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalLogout({ children, closeModal, ...rest }: Props) {
  return (
    <Modal
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
    </Modal>
  )
}