import React from 'react';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { Container, Content } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Bala',
      icon: 'image.png',
      owner: true
    }
  ]

  return (
    <Container>
      <Content
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 68,
        }}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
      />
    </Container>
  )
}