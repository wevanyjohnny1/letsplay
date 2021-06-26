import React, { useState } from 'react';
import { AddButton } from '../../components/AddButton';
import { Appointment } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import {
  Container,
  Header,
  GameContent,
  GameBox
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Homepage() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem porder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem porder uma partida da md10'
    }
  ]

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <AddButton
            onPress={handleAppointmentCreate}
          />
        </Header>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelected}
        />
        <GameContent>
          <ListHeader
            title="Partidas agendadas"
            subtitle="Total 6"
          />

        </GameContent>
      </Container>
      <GameBox
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 69 }}
        showsHorizontalScrollIndicator={false}
      />
    </Background >
  )
}