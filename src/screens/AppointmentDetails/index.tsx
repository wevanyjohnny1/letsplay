import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Alert, Platform, Share } from 'react-native';
import * as Linking from 'expo-linking';
import { Fontisto } from '@expo/vector-icons';

import { ShareButton, Banner, Title, Subtitle, BannerContent, PlayersList, Footer } from './styles';
import theme from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import DiscordSvg from '../../assets/discord.svg';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { AppHeader } from '../../components/AppHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import SignInSocialButton from '../../components/SignInSocialButton';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';

interface Params {
  guildSelected: AppointmentProps;
}

interface GuildWidget {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);

      setWidget(response.data);
    } catch {
      Alert.alert("Verifique as configurações do servidor. Habilite a opção de widget")
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios'
      ? `Junte-se a ${guildSelected.guild.name}`
      : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget();
  }, [])
  return (
    <Background>
      <AppHeader
        title="Detalhes"
        action={
          guildSelected.guild.owner &&
          <ShareButton onPress={handleShareInvitation}>
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
            {guildSelected.guild.name}
          </Title>
          <Subtitle>
            {guildSelected.description}
          </Subtitle>
        </BannerContent>
      </Banner>

      {
        loading ? <Load /> :
          <>
            <ListHeader
              title="Jogadores"
              subtitle={`Total ${widget?.members?.length}`}
            />

            <PlayersList
              data={widget.members}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Member data={item} />
              )}
              ItemSeparatorComponent={() => <ListDivider isCentered />}
            />
          </>
      }

      {
        guildSelected.guild.owner &&
        <Footer>
          <SignInSocialButton
            title="Entrar na partida"
            svg={DiscordSvg}
            onPress={handleOpenGuild}
          />
        </Footer>
      }
    </Background>
  )
}