import React from 'react';

import {View, Text} from 'react-native';

import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ListView, LoginView, CartView} from 'views';
import {Header} from 'container';
import {Button} from 'components';

import {COLORS} from 'styles';
import {styles} from './styles';
import {formatPrice} from 'utils';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const auth = useSelector((state: any) => state.Auth);
  const {cart} = useSelector((state: any) => state.CartShop);
  let value = 0;

  cart.map((c: {colorfulness: number}) => {
    value = c.colorfulness + value;
  });

  const routes = {
    login: 'login',
    arts: 'Arts',
    cart: 'Cart',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth.signed ? routes.arts : routes.login}>
        <Stack.Screen
          name={routes.login}
          component={LoginView}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 0,
            },
            gestureEnabled: false,
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name={routes.arts}
          component={ListView}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: COLORS.secondaryDark,
              height: 120,
            },
            gestureEnabled: false,
            headerLeft: () => <Header nav={navigation} />,
            headerRight: () => (
              <View style={styles.viewButton}>
                <Button
                  loading={false}
                  style={styles.button}
                  activeOpacity={0.6}
                  disabled={false}
                  onPress={() => {
                    navigation.push('Cart');
                  }}>
                  <Icon name="opencart" size={24} color={COLORS.lightColor} />
                  {cart.length > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.text}>{cart.length}</Text>
                    </View>
                  )}
                </Button>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name={routes.cart}
          component={CartView}
          options={({navigation}) => ({
            title: 'Valor Total: ' + formatPrice(value),
            headerStyle: {
              backgroundColor: COLORS.secondaryDark,
              height: 120,
            },
            headerTintColor: COLORS.primary,
            headerTitleStyle: {
              alignItems: 'center',
              fontSize: 14,
            },
            gestureEnabled: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
