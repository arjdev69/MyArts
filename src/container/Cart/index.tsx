import React from 'react';

import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {Background, Button} from 'components';
import {styles} from 'container/List/ListItem/styles';
import ListItem from 'container/List/ListItem';
import {stylesCart} from './styles';
import {APPLABELS} from 'utils/Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from 'styles';

export interface Props {
  goHome: any;
}

const Cart: React.FC<Props> = props => {
  const {cart} = useSelector((state: any) => state.CartShop);

  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        {cart.length > 0 ? (
          <>
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
          </>
        ) : (
          <UI.View style={styles.emptyCart}>
            <UI.Text style={styles.emptyCartText}>Carrinho vazio</UI.Text>
            <Button
              style={styles.btnHome}
              onPress={props.goHome}
              activeOpacity={0.5}
              disabled={false}
              loading={false}>
              <Icon name={'home'} size={25} color={COLORS.lightColor} />
              <UI.Text style={styles.emptyCartText}>Ir para Home</UI.Text>
            </Button>
          </UI.View>
        )}
      </Background>
    </UI.View>
  );
};

export default Cart;
