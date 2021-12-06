import React, {useEffect, useState} from 'react';

import {View} from 'react-native';

import {setListCart} from 'store/modules/Cart/actions';
import {URL} from 'utils/Constants';

import {Box, ImageLoad, Label} from 'components';

import {styles, ShopButton} from './styles';
import {useDispatch, useSelector} from 'react-redux';

export interface Props {
  _item: {
    id: number;
    title: String;
    image_id: String;
    thumbnail: {
      lqip: String;
      width: number;
      height: number;
    };
  };
}

const ListItem: React.FC<Props> = props => {
  const {_item} = props;
  const dispatch = useDispatch();
  const {cart} = useSelector((state: any) => state.CartShop);

  const image = {
    uri: URL.imageStart + _item.image_id + URL.imageEnd,
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Box styles={styles.box}>
      <ImageLoad
        styles={styles.image}
        url={image}
        urlLoad={{uri: _item.thumbnail.lqip}}
      />
      <View style={styles.boxBtn}>
        <Label icon={false} style={styles.label} viewStyle={{}}>
          {_item.title.substr(0, 15) + '...'}
        </Label>
        <ShopButton
          onPress={() => {
            let item = [...cart, _item];
            dispatch(setListCart(item));
          }}>
          <Label icon={false} style={styles.labelShop} viewStyle={{}}>
            COMPRAR
          </Label>
        </ShopButton>
      </View>
    </Box>
  );
};

export default ListItem;
