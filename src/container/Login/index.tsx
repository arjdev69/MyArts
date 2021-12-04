import React from 'react';
import * as UI from 'react-native';

import {Background} from 'components';
import LoginForm from './Form/LoginForm';

export interface Props {
  requestLogin: any;
}

const Login: React.FC<Props> = _props => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <LoginForm requestLogin={_props.requestLogin} />
      </Background>
    </UI.View>
  );
};

export default Login;
