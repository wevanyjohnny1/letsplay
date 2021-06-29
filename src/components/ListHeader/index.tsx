import React from 'react';

import { Container, Title, SubTitle } from './styles';

interface IListHeaderProps {
  title: string;
  subtitle: string;
}

export function ListHeader({ title, subtitle }: IListHeaderProps) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <SubTitle>
        {subtitle}
      </SubTitle>
    </Container>
  )
}