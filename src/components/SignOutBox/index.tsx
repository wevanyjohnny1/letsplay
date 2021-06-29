import React from 'react';
import theme from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

import { Container, TitleContainer, Title, TitleRed, ButtonContainer, ButtonYes, ButtonBorder, ButtonNo, ButtonText } from './styles';

export function SignOutBox() {
  const { secondary80, secondary100 } = theme.colors;
  const { signOut } = useAuth();

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
        {/* <SignOutButton
          onPress={signOut}
        /> */}
        <ButtonYes onPress={signOut}>
          <ButtonText>
            Sim
          </ButtonText>
        </ButtonYes>
      </ButtonContainer>
    </Container>
  )
}