import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { Container, Title, SubTitle, ImageContainer, Content } from './styles';

import SignInSocialButton from '../../components/SignInSocialButton';
import { Background } from '../../components/Background';

import DiscordSvg from '../../assets/discord.svg';

import IllustrationImg from '../../assets/illustration.png';
import { useAuth } from '../../hooks/auth';
import theme from '../../global/styles/theme';

export function SignIn() {

  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
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
          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
              <SignInSocialButton
                title="Entrar com discord"
                svg={DiscordSvg}
                onPress={handleSignIn}
              />
          }
        </Content>
      </Container>
    </Background>
  )
}