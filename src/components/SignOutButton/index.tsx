import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonYes, ButtonText } from './styles';

interface Props extends RectButtonProps {
  signOut: () => void;
}

export function SignOutButton({ signOut, ...rest }: Props) {
  return (
    <ButtonYes onPress={signOut}>
      <ButtonText>
        Sim
      </ButtonText>
    </ButtonYes>
  )
}