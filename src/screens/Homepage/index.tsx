import React, { useState } from 'react';
import { AddButton } from '../../components/AddButton';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import {
  Container,
  Header,
  Content
} from './styles';

export function Homepage() {
  const [category, setCategory] = useState('');

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <Container>
      <Header>
        <Profile />
        <AddButton />
      </Header>
      <Content>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />
      </Content>
    </Container>
  )
}