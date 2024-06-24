import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/router';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;
export function ForgotPasswordScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'E-mail de recuperação enviado!',
      description: 'Clique no link enviado por E-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu E-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu email"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
