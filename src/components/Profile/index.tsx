import React from 'react';
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
  return (
    <UserContainer>
      <Avatar
        urlImage="https://github.com/wevanyjohnny1.png"
      />
      <TextContainer>
        <GreetingsContainer>
          <Greetings>
            Olá,
          </Greetings>
          <UserName>
            Johnny
          </UserName>
        </GreetingsContainer>
        <UserStatus>
          Hoje é dia de vitória
        </UserStatus>
      </TextContainer>


    </UserContainer>
  )
}