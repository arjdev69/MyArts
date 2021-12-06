import React from 'react';
import {View} from 'react-native';

import {Cart} from 'container';
import {routes} from 'utils/Constants';

export interface Props {
  navigation: {
    push: any;
  };
}

const CartView: React.FC<Props> = props => {
  const goHome = () => {
    props.navigation.push(routes.arts);
  };

  return (
    <View>
      <Cart goHome={goHome} />
    </View>
  );
};

export default CartView;
