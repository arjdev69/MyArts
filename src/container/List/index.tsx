import React, {useCallback, useEffect, useState} from 'react';
import * as UI from 'react-native';

import {Background} from 'components';
import ListItem from './ListItem';
import {styles} from './ListItem/styles';
import {formatPrice} from 'utils';
import {useSelector} from 'react-redux';

export interface Props {
  _data: [];
}

const List: React.FC<Props> = props => {
  const {_data} = props;
  const [products, setProducts] = useState([]);
  const {cart} = useSelector((state: any) => state.CartShop);

  const filterProducts = useCallback(
    (productID: any) => {
      let result = cart.find((c: {id: any}) => c.id === productID);
      if (result) {
        return true;
      } else {
        return false;
      }
    },
    [cart],
  );

  useEffect(() => {
    async function loadProducts() {
      const data = _data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.colorfulness),
        selected: filterProducts(product.id),
      }));
      setProducts(data);
    }
    loadProducts();
  }, [_data, filterProducts]);

  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <UI.View style={styles.listItem}>
          <UI.FlatList
            data={products}
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
