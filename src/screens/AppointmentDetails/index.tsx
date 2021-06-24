import React from 'react';
import { Fontisto } from '@expo/vector-icons';

import { ShareButton, Banner, Title, Subtitle, BannerContent, PlayersList } from './styles';
import theme from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { AppHeader } from '../../components/AppHeader';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Johnny',
      avatar_url: 'https://github.com/johnnywevany1.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Laura',
      avatar_url: 'https://github.com/johnnywevany1.png',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <AppHeader
        title="Detalhes"
        action={
          <ShareButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </ShareButton>
        }
      />

      <Banner
        source={BannerImg}
      >
        <BannerContent>
          <Title>
            Lendários
          </Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </BannerContent>
      </Banner>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <PlayersList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          
        )}
      />
    </Background>
  )
}