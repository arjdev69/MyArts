import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {darken, lighten} from 'polished';

export const WP = wp;
export const HP = hp;

export const COLORS = {
  primary: '#fff',
  primaryLight: lighten(0.1, '#fff'),
  primaryDark: darken(0.19, '#fff'),
  primaryText: '#C5C4C9',
  primaryTextDark: '#7D7C82',
  primaryTextLight: '#D3D3E3',
  /*----*/
  secondary: '#5E79D1',
  secondaryLight: lighten(0.1, '#5E79D1'),
  secondaryDark: darken(0.19, '#5E79D1'),
  secondaryText: '#5E79D1',
  secondaryTextLight: '#5E79D1',
  secondaryTextDark: '#5E79D1',
  /*------*/
  neutral: '#5E79D1',
  neutralLight: '#5E79D1',
  neutralDark: '#71706f',
  neutralText: '#f9f9f9',
  neutralTextLight: '#ffeded',
  neutralTextDark: '#bbb',
  /*------*/
  lightColor: '#FFF',
  darkColor: '#000',

  /*----*/

  nextColor: '#A5B0D8',
  errorColor: '#ff5050',

  /*----*/
  transparentLoadColor: '#0000004f',
  transparentLightColor: '#FFF5',
  transparentDarkColor: '#0005',
};

export const SIZES = {
  gradient: {
    position: {
      start: {
        x: 0.9,
        y: 0.1,
      },
      end: {
        x: 0.1,
        y: 0.9,
      },
    },
    location: [0.2, 0.9, 0.4],
  },
  titleMenu: 20,
  titleMenuSpacing: 4,
  heightMenuMain: 8,
  font: 24,
  bdRadius: 8,
};
