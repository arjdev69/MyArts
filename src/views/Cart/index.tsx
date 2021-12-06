import React from 'react';
import {View} from 'react-native';

import {Cart} from 'container';

export interface Props {
  navigation: {
    push: any;
  };
}

const CartView: React.FC<Props> = props => {
  const goHome = () => {
    props.navigation.push('Arts');
  };

  return (
    <View>
      <Cart goHome={goHome} />
    </View>
  );
};

export default CartView;
