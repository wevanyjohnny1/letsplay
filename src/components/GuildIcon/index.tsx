import React from 'react';

import { Content, Container } from './styles';
import DiscordSvg from '../../assets/discord.svg';
import theme from '../../global/styles/theme';

const { CDN_IMAGE } = process.env;

interface Props {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Content
      style={{
        backgroundColor: !iconId ? theme.colors.discord : null
      }}
    >
      {
        iconId ?
          <Container
            source={{ uri }}
            resizeMode="cover"
          />
          :
          <DiscordSvg
            width={40}
            height={40}
          />
      }
    </Content>
  )
}