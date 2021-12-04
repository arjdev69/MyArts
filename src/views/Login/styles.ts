import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {COLORS} from 'styles';

export const Container = styled.View``;

export const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.lightColor,
    fontSize: 16,
    marginLeft: 8,
  },
  loading: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparentLoadColor,
  },
});
