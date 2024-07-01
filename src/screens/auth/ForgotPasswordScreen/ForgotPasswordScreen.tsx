import React from 'react';

import {Button, Screen, Text, TextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
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
