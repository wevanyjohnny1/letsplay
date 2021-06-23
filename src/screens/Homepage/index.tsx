import React from 'react';
import { AddButton } from '../../components/AddButton';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import {
  Container,
  Header,
  Content
} from './styles';

export function Homepage() {
  return (
    <Container>
      <Header>
        <Profile />
        <AddButton />
      </Header>
      <Content>
        <CategorySelect />
      </Content>
    </Container>
  )
}