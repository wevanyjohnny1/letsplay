import React from 'react';

import { Container } from './styles';

interface IListDividerProps {
  isCentered?: boolean;
}

export function ListDivider({ isCentered }: IListDividerProps) {
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