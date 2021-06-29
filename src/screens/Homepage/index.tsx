import React, { useState, useCallback } from 'react';
import { AddButton } from '../../components/AddButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  GameBox,
} from './styles';

import { Appointment, IAppointmentProps } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Homepage() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<IAppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: IAppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }


  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: IAppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]));

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
      </Container>
      {
        loading ? <Load /> :
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            <GameBox
              data={appointments}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 69 }}
              showsHorizontalScrollIndicator={false}
            />
          </>
      }
    </Background >
  )
}