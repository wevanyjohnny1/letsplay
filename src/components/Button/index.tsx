import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonBox, Text } from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export default function Button({
  title,
  ...rest
}: Props) {
  return (
    <ButtonBox {...rest}>
      <Text>
        {title}
      </Text>
    </ButtonBox>
  )
}
