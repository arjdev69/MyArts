import React from 'react';
import * as UI from 'react-native';

import {Container} from './styles';

import BoxLogo from './BoxLogo';
import BoxForm from './BoxForm';

export interface Props {
  requestLogin: any;
}

const LoginForm: React.FC<Props> = _props => {
  return (
    <Container>
      <UI.KeyboardAvoidingView behavior={'position'}>
        <BoxLogo />
        <BoxForm requestLogin={_props.requestLogin} />
      </UI.KeyboardAvoidingView>
    </Container>
  );
};

export default LoginForm;
