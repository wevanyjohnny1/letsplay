import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import theme from '../../global/styles/theme';
import {
  Container,
  Content,
  ContentBox,
  Header,
  Title,
  CategoryTitle,
  PlayersInfo,
  PlayerInfoText,
  Footer,
  DateInfo,
  DateText
} from './styles';
import { categories } from '../../utils/categories'
import { GuildProps } from '../Guild';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <Container {...rest}>
      <Content>
        <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

        <ContentBox>
          <Header>
            <Title>
              {data.guild.name}
            </Title>
            <CategoryTitle>
              {category?.title}
            </CategoryTitle>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />
              <DateText>
                {data.date}
              </DateText>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg
                fill={owner ? primary : on}
              />
              <PlayerInfoText
                style={{ color: owner ? primary : on }}
              >
                {owner ? 'Anfitrião' : 'Visitante'}
              </PlayerInfoText>

            </PlayersInfo>
          </Footer>

        </ContentBox>



      </Content>

    </Container>
  )
}