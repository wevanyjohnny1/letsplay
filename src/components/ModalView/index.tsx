import React, { ReactNode } from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Background } from '../Background';

import { Overlay, ContentContainer, Bar } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
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
              <Bar />
              {children}
            </Background>
          </ContentContainer>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  )
}