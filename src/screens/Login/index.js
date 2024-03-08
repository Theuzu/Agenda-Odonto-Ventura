import React from 'react';
import { Platform } from 'react-native';

import {
  Background,
  Container,
  HeaderView,
  Logo,
  Title,
  Desc,
  InputView,
  InputLabel,
  Input,
  SubmitBtn,
  SubmitBtnText,
} from './styles';

export default function Login() {
  return (
    <Background>
      <Container
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      enabled>
        <HeaderView>

          <Logo
            source={require('../../assets/logoWithBackground.png')}
          />

          <Title>Odonto Ventura</Title>

          <Desc>Faça login para acessar as agendas</Desc>

        </HeaderView>

        <InputView>

          <InputLabel>Profissional:</InputLabel>
            <Input
              autoCapitalize="words"
              autoCorrect={false}
              // onChangeText={name => setForm({ ...form, name })}
              placeholder="Adriana Ventura"
              placeholderTextColor="#6b7280"
              />
          </InputView>

          <InputView>

          <InputLabel>Senha:</InputLabel>
            <Input
              autoCorrect={false}
              // onChangeText={password => setForm({ ...form, password })}
              placeholder="**********"
              placeholderTextColor="#6b7280"
              secureTextEntry={true}
              />
          </InputView>

          <SubmitBtn>
            <SubmitBtnText>Acessar</SubmitBtnText>
          </SubmitBtn>

      </Container>
    </Background>
  );
}