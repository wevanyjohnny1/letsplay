import React, { useState } from 'react';
import { Platform } from 'react-native';
import uuid from 'react-native-uuid';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ContainerAvoidView,
  Container,
  Title,
  Form,
  Select,
  SelectButton,
  SelectImage,
  SelectBody,
  Field,
  FieldText,
  Column,
  Divider,
  Subtitle,
  ButtonContainer
} from './styles';
import theme from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { AppHeader } from '../../components/AppHeader';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInpu';
import { TextArea } from '../../components/TextArea';
import Button from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelectec: GuildProps) {
    setGuild(guildSelectec);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId)
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Homepage');
  }

  return (
    <ContainerAvoidView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Background>
        <Container>
          <AppHeader
            title="Agendar Partida"
          />
          <Title style={{
            marginTop: 36,
            marginLeft: 24,
            marginBottom: -22,
          }}>
            Categoria
      </Title>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <Form>
            <Select>
              <SelectButton
                onPress={handleOpenGuildsModal}
              >
                {
                  guild.icon ?
                    <GuildIcon guildId={guild.id} iconId={guild.icon} /> :
                    <SelectImage />
                }
                <SelectBody>
                  <Title>
                    {guild.name ? guild.name : 'Selecione um Servidor'}
                  </Title>
                </SelectBody>
                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={RFValue(18)}
                />
              </SelectButton>
            </Select>

            <Field>

              <FieldText>
                <Title style={{ marginBottom: 10 }}>
                  Data
              </Title>
                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setDay}
                  />
                  <Divider>
                    /
              </Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMonth}
                  />
                </Column>
              </FieldText>

              <FieldText>
                <Title style={{ marginBottom: 10 }}>
                  Horário
              </Title>
                <Column>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setHour}
                  />
                  <Divider>
                    :
              </Divider>
                  <SmallInput
                    maxLength={2}
                    onChangeText={setMinute}
                  />
                </Column>
              </FieldText>

            </Field>

            <Field
              style={{
                marginBottom: 12
              }}
            >
              <Title>
                Descrição
            </Title>
              <Subtitle>
                Max 100 caracteres
            </Subtitle>
            </Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              onChangeText={setDescription}
            />

            <ButtonContainer>
              <Button
                title="Agendar"
                onPress={handleSave}
              />
            </ButtonContainer>
          </Form>
        </Container>
      </Background>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds
          handleGuildSelect={handleGuildSelect}
        />
      </ModalView>
    </ContainerAvoidView>
  )
}