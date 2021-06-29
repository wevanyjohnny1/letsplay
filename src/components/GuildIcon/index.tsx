import React from 'react';
import DiscordSvg from '../../assets/discord.svg';
import theme from '../../global/styles/theme';

import { Content, Container } from './styles';

const { CDN_IMAGE } = process.env;

interface IGuildIconProps {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: IGuildIconProps) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Content
      style={{
        backgroundColor: !iconId ? theme.colors.discord : theme.colors.secondary100
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