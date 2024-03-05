import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container } from "./styles";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Home</Text>

      <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
        <Text>Fazer Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}