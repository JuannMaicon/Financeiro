import React, { useState } from 'react';
import { Platform, Alert } from 'react-native';
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

export default function Pagina1() {
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [placeholder, setPlaceholder] = useState('Digite sua senha');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Todos os campos são obrigatórios!');
    } else {
      // Autenticação aqui
      Alert.alert('Sucesso', 'Você acessou sua conta!');
    }
  };

  return (
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
            value={email}
            onChangeText={setEmail}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder={placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onFocus={() => setPlaceholder('****')}
            onBlur={() => setPlaceholder('Digite sua senha')}
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.8} onPress={handleSubmit}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('Pagina2')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
