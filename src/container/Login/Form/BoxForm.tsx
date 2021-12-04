import React, {useState} from 'react';

import {isValidEmail} from 'utils';

import {Box, Input} from 'components';

import {styles, Form, ButtonCustom, Text} from './styles';
import {COLORS} from 'styles';
export interface Props {
  requestLogin: any;
}

const BoxForm: React.FC<Props> = _props => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [password, setPassword] = useState('');

  const sendInfoServer = () => {
    if (email === '' || !isValidEmail(email)) {
      setEmailError(true);

      setTimeout(() => {
        setEmailError(false);
      }, 1000);
      return;
    }

    if (password === '') {
      setPasswordError(true);

      setTimeout(() => {
        setPasswordError(false);
      }, 1000);
      return;
    }

    if (email && password) {
      _props.requestLogin(email, password);
    }
  };

  return (
    <Box styles={styles.box}>
      <Form>
        <Input
          icon="mail-outline"
          colorIcon={emailError ? COLORS.errorColor : COLORS.lightColor}
          styleBox={[styles.boxInput, emailError && styles.error]}
          style={[styles.input, emailError && styles.error]}
          placeholderTextColor={
            emailError ? COLORS.errorColor : COLORS.lightColor
          }
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          icon="lock-outline"
          colorIcon={passwordError ? COLORS.errorColor : COLORS.lightColor}
          styleBox={[styles.boxInput, passwordError && styles.error]}
          style={[styles.input, passwordError && styles.error]}
          placeholderTextColor={
            passwordError ? COLORS.errorColor : COLORS.lightColor
          }
          secureTextEntry
          placeholder="Sua senha secreta"
          returnKeyType="send"
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={sendInfoServer}
        />
      </Form>
      <ButtonCustom
        loading={false}
        activeOpacity={0.6}
        onPress={sendInfoServer}
        style={{}}>
        <Text icon={false} viewStyle={{}} style={{}}>
          Sign In
        </Text>
      </ButtonCustom>
    </Box>
  );
};

export default BoxForm;
