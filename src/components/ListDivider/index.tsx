import React from 'react';

import { Container } from './styles';

interface Props {
  isCentered?: boolean;
}

export function ListDivider({ isCentered }: Props) {
  return (
    <Container
      style={[
        isCentered ? {
          marginVertical: 12,
        } : {
          marginTop: 2,
          marginBottom: 31
        }
      ]}
    />
  )
}