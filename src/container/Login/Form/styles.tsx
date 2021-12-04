import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

import {Label, Button} from 'components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${COLORS.transparentDarkColor};
  margin: 0px 0px 0px;
  margin-top: ${HP(30)};
  border-radius: 25px;
`;

export const Title = styled(Label)`
  color: #fff;
  margin: 20px;
`;

export const Form = styled.View`
  width: 100%;
  margin: 15px 0;
`;

export const ButtonCustom = styled(Button)`
  align-items: center;
  background: ${COLORS.transparentDarkColor};
  border-radius: 5px;
  padding: 20px;
  width: 70%;
  margin-top: 25px;
`;

export const Text = styled(Label)`
  color: #fff;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  boxNotFound: {
    height: HP('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelNotFound: {
    color: COLORS.primary,
    fontSize: 32,
  },
  box: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 50,
    padding: 30,
    width: WP('100%'),
  },
  image: {
    height: 64,
    width: 64,
  },
  label: {
    fontSize: HP('4%'),
  },
  boxInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomColor: COLORS.lightColor,
    borderBottomWidth: 0.3,
  },
  input: {
    flex: 1,
    color: COLORS.lightColor,
    fontSize: HP('1.8%'),
    margin: 15,
    marginLeft: 10,
    letterSpacing: 1,
  },
  error: {
    color: COLORS.errorColor,
    borderBottomColor: COLORS.errorColor,
  },
});
