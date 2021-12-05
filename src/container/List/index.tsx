import React from 'react';
import * as UI from 'react-native';

import {Background} from 'components';
import ListItem from './ListItem';

export interface Props {
  _data: [];
}

const List: React.FC<Props> = props => {
  const {_data} = props;

  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <UI.View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
          }}>
          <UI.FlatList
            data={_data}
            renderItem={({item}) => <ListItem _item={item} />}
            numColumns={2}
            alwaysBounceHorizontal={false}
            removeClippedSubviews
          />
        </UI.View>
      </Background>
    </UI.View>
  );
};

export default List;
