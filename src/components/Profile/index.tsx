import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';

import {
  UserContainer,
  AvatarContainer,
  TextContainer,
  Greetings,
  UserName,
  UserStatus,
  GreetingsContainer,
  LogoutButton
} from './styles';

import theme from '../../global/styles/theme';
import { ModalLogout } from '../ModalLogout';
import { SignOutBox } from '../SignOutBox';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setOpenLogoutModal(true);
  }

  function handleCloseLogoutModal() {
    setOpenLogoutModal(false);
  }

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
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
      <AvatarContainer>
        <Avatar
          urlImage={user.avatar}
        />
        <LogoutButton onPress={handleOpenLogoutModal}>
          <AntDesign
            name="poweroff"
            size={15}
            color={theme.colors.primary}
          />
        </LogoutButton>
      </AvatarContainer>
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
      <ModalLogout
        visible={openLogoutModal}
        closeModal={handleCloseLogoutModal}
      >
        <SignOutBox />
      </ModalLogout>
    </UserContainer>
  )
}