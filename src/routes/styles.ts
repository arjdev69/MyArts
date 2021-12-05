import {StyleSheet} from 'react-native';

import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
    marginRight: 1,
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
