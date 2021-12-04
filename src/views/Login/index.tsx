import React, {useEffect} from 'react';
import * as UI from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from 'store/modules/auth/actions';

import {Loading} from 'components';

import {styles} from './styles';
import {COLORS} from 'styles';
import {Login} from 'container';

export interface Props {
  navigation: any;
}

const LoginView: React.FC<Props> = _props => {
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.Auth);

  const requestLogin = (email: any, passw: any) => {
    dispatch(signInRequest(email, passw));
  };

  useEffect(() => {
    if (auth.signed) {
      _props.navigation.push('ListCompanys');
    }
  }, [_props.navigation, auth.signed]);

  return (
    <UI.View>
      {auth.loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={styles.loading}
        />
      )}
      <Login requestLogin={requestLogin} />
    </UI.View>
  );
};

export default LoginView;
