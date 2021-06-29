import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

import { GuildIcon } from '../GuildIcon';

import {
  Container,
  Content,
  ContentBox,
  Title,
  Type
} from './styles';

export interface IGuildProps {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

interface Props extends TouchableOpacityProps {
  data: IGuildProps;
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