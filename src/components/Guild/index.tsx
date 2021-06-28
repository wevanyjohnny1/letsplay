import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import {
  Container,
  Content,
  ContentBox,
  Title,
  Type
} from './styles';
import theme from '../../global/styles/theme';

export interface GuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface Props extends TouchableHighlightProps {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <Container
      {...rest}
      activeOpacity={0.7}
    >
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <Content>
        <ContentBox>
          <Title>
            {data.name}
          </Title>
          <Type>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Type>
        </ContentBox>
      </Content>

      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={RFValue(24)}
      />

    </Container>
  )
}