import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" mb="s8">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          errorMessage="mensagem de error"
          label="Email"
          placeholder="Digite seu email"
          boxProps={{mb: 's20'}}
        />

        <TextInput
          RightComponent={<Icon color="gray1" name="eyeOn" />}
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's10'}}
        />

        <Text preset="paragraphSmall" bold color="primary">
          Esqueci minha senha
        </Text>

        <Button title="Entrar" marginTop="s48" />
        <Button preset="Outline" title="Criar conta" marginTop="s12" />
      </View>
    </SafeAreaView>
  );
}