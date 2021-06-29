import React, { useState, useEffect } from 'react';
import { Guild, IGuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { Container, Content } from './styles';

interface Props {
  handleGuildSelect: (guild: IGuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<IGuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, [])

  return (
    <Container>
      {
        loading ? <Load /> :
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
      }
    </Container>
  )
}