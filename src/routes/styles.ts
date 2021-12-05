import {StyleSheet} from 'react-native';

import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    backgroundColor: COLORS.transparentDarkColor,
    borderRadius: 30,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
});
