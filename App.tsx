import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
