import React from 'react';
import theme from '../../global/styles/theme';
import { Avatar } from '../Avatar';

import {
  Container,
  Title,
  Status,
  StatusTitle,
  ContentText,
  StatusBuble
} from './styles';

export interface IMemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: IMemberProps;
}

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';
  return (
    <Container>
      <Avatar
        urlImage={data.avatar_url}
      />

      <ContentText>
        <Title>
          {data.username}
        </Title>
        <Status>
          <StatusBuble
            style={{
              backgroundColor: isOnline ? on : primary
            }}
          />
          <StatusTitle>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </StatusTitle>
        </Status>
      </ContentText>
    </Container>
  )
}