import React from 'react';

import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {Background} from 'components';
import {styles} from 'container/List/ListItem/styles';
import ListItem from 'container/List/ListItem';
import {stylesCart} from './styles';
import {APPLABELS} from 'utils/Constants';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: any) => state.CartShop);

  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <UI.Text style={stylesCart.label}>
          {cart.length + ' ' + APPLABELS.selectedProdutos + ':'}
        </UI.Text>
        <UI.View style={styles.listItem}>
          <UI.FlatList
            data={cart}
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

export default Cart;
