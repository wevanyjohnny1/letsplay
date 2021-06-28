import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonYes, ButtonText } from './styles';

interface Props extends RectButtonProps {
  logOut: () => void;
}

export function SignOutButton({ logOut, ...rest }: Props) {
  return (
    <ButtonYes onPress={logOut} {...rest}>
      <ButtonText>
        Sim
      </ButtonText>
    </ButtonYes>
  )
}