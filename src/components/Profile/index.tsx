import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import {
  UserContainer,
  TextContainer,
  Greetings,
  UserName,
  UserStatus,
  GreetingsContainer
} from './styles';

export function Profile() {
  const { user } = useAuth();

  return (
    <UserContainer>
      <Avatar
        urlImage={user.avatar}
      />
      <TextContainer>
        <GreetingsContainer>
          <Greetings>
            Olá,
          </Greetings>
          <UserName>
            {user.firstName}
          </UserName>
        </GreetingsContainer>
        <UserStatus>
          Hoje é dia de vitória
        </UserStatus>
      </TextContainer>


    </UserContainer>
  )
}