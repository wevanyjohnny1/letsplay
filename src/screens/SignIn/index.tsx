import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, SubTitle, ImageContainer, Content } from './styles';

import SignInSocialButton from '../../components/SignInSocialButton';

import DiscordSvg from '../../assets/discord.svg';

import IllustrationImg from '../../assets/illustration.png';



export function SignIn() {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate('Homepage')
  }

  return (
    <Container>
      <ImageContainer source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </SubTitle>
        <SignInSocialButton
          title="Entrar com discord"
          svg={DiscordSvg}
          onPress={handleSignIn}
        />
      </Content>
    </Container>
  )
}