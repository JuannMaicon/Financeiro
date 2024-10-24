import React from 'react';
import { Platform } from 'react-native';

import { 
  Background, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Pagina1(){
  const navigation = useNavigation();

  return(
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={require('../../imagens/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder="Seu email"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('Pagina2') }>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>

    </Background>
  )
}