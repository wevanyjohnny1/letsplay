import React from 'react';
import theme from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';
import { SignOutButton } from '../SignOutButton';

import { Container, TitleContainer, Title, TitleRed, ButtonContainer, ButtonBorder, ButtonNo, ButtonText } from './styles';

export function SignOutBox() {
  const { secondary80, secondary100 } = theme.colors;
  const { signOut } = useAuth();

  function Test() {
    console.log('success')
  }

  return (
    <Container>
      <TitleContainer>
        <Title>
          Deseja sair do Game
        </Title>
        <TitleRed>
          Play
        </TitleRed>
        <Title>
          ?
        </Title>
      </TitleContainer>
      <ButtonContainer>
        <ButtonBorder
          colors={[secondary80, secondary100]}
        >
          <ButtonNo>
            <ButtonText>
              Não
            </ButtonText>
          </ButtonNo>
        </ButtonBorder>
        <SignOutButton
          signOut={Test}
        />
      </ButtonContainer>
    </Container>
  )
}