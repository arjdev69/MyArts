import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS, HP, WP} from 'styles';

import {Label, Button} from 'components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: ${WP(85)};
  padding: 10px;
`;

export const LabelText = styled(Label)`
  padding: 10px;
  font-size: ${HP(2.2)};
  color: ${COLORS.primary};
`;

export const ButtonCustom = styled(Button)`
  align-items: center;
`;

export const styles = StyleSheet.create({
  image: {
    height: 64,
    width: 64,
  },
  label: {
    fontSize: HP('4%'),
  },
  button: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    backgroundColor: COLORS.transparentDarkColor,
    borderRadius: 30,
    justifyContent: 'center',
  },
  btnClose: {
    padding: 10,
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 80,
  },
});
