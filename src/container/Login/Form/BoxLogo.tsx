import React from 'react';

import {Box, ImageLoad} from 'components';

import {APPLABELS, ICON_LOGO} from 'utils/Constants';
import {styles, Title} from './styles';

const BoxLogo: React.FC = () => {
  return (
    <Box styles={styles.box}>
      <ImageLoad styles={styles.image} url={ICON_LOGO} urlLoad={{ICON_LOGO}} />
      <Title style={styles.label}>{APPLABELS.appName}</Title>
    </Box>
  );
};

export default BoxLogo;
