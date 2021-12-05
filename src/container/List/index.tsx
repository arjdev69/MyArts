import React from 'react';
import * as UI from 'react-native';

import {Background} from 'components';

const List: React.FC = () => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <UI.Text>LOMBINHO</UI.Text>
      </Background>
    </UI.View>
  );
};

export default List;
