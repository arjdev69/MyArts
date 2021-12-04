import React from 'react';

import {Box} from 'components';

import {appLabels} from 'utils/Constants';
import {styles, Title} from './styles';

const BoxLogo: React.FC = () => {
  return (
    <Box styles={styles.box}>
      {/* <ImageLoad styles={styles.image} url={ICON_LOGO} urlLoad={{ICON_LOGO}} /> */}
      <Title style={styles.label}>{appLabels.appName}</Title>
    </Box>
  );
};

export default BoxLogo;
