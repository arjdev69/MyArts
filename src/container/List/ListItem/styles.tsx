import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

import {Button} from 'components';

export const ShopButton = styled(Button)`
  align-items: center;
  padding: 10px;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
  background: ${COLORS.transparentDarkColor};
`;

export const styles = StyleSheet.create({
  box: {
    width: WP('45%'),
    alignItems: 'center',
    margin: 5,
    padding: 0,
    backgroundColor: COLORS.transparentDarkColor,
  },
  boxBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: '100%',
  },
  labelShop: {
    color: COLORS.primary,
  },
  image: {
    height: HP('20%'),
    width: '100%',
    resizeMode: 'stretch',
  },
  label: {
    fontSize: HP('2%'),
    color: 'white',
  },
  listItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
  },
});
