import React from 'react';

import { Container } from './styles'

export function GuildIcon() {
  const uri = "https://cdn.icon-icons.com/icons2/1029/PNG/256/Luffys_flag_icon-icons.com_76118.png"
  return (
    <Container
      source={{ uri }}
      resizeMode="cover"
    />
  )
}