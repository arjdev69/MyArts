import React from 'react';
import * as UI from 'react-native';

import {List} from 'container';

const ListView: React.FC = () => {
  return (
    <UI.View style={{backgroundColor: 'red'}}>
      <List />
    </UI.View>
  );
};

export default ListView;
