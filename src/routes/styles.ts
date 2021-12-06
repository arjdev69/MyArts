import {StyleSheet} from 'react-native';

import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    backgroundColor: COLORS.transparentDarkColor,
    borderRadius: 30,
    position: 'relative',
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  badge: {
    alignItems: 'center',
    position: 'absolute',
    fontWeight: 'bold',
    padding: 2,
    height: 20,
    width: 20,
    top: 25,
    left: 35,
    borderRadius: 25,
    backgroundColor: COLORS.colorBadge,
  },
  text: {
    fontSize: 12,
    color: COLORS.primary,
  },
});
