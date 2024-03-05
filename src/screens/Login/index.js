import React from 'react';
import { View, Text } from 'react-native';

import { Background, Container, Logo, InputArea, Input } from './styles';

export default function Login() {
  return (
    <Background>
      <Container>

        <Logo
          source={require('../../assets/logo.png')}
        />

        <InputArea>
          <Input
            placeholder="Placeholder"
          />
        </InputArea>

        <InputArea>
          <Input
            placeholder="Placeholder"
          />
        </InputArea>

      </Container>

    </Background>
  );
}