import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Title, SubTitle, ImageContainer, Content } from './styles';

import SignInSocialButton from '../../components/SignInSocialButton';

import DiscordSvg from '../../assets/discord.svg';

import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageContainer source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </SubTitle>
        <SignInSocialButton
          title="Entrar com discord"
          svg={DiscordSvg}
          onPress={() => console.log('oi')}
        />
      </Content>
    </Container>
  )
}