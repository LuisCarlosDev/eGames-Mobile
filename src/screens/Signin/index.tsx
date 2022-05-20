import React from "react";
import { Text, StatusBar } from 'react-native';

import { Container, Title } from "./styles";

export function Signin() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Title>Login</Title>
    </Container>
  )
}
