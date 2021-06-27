import React from 'react';
import { Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
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
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ])
  }

  return (
    <UserContainer>

      <RectButton onPress={handleSignOut}>
        <Avatar
          urlImage={user.avatar}
        />
      </RectButton>
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