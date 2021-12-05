import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {signOut} from 'store/modules/auth/actions';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ListView, LoginView} from 'views';

import {COLORS} from 'styles';
import {styles} from './styles';
import {Button} from 'components';
import {Text, View} from 'react-native';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.Auth);
  const routes = {
    login: 'login',
    arts: 'Arts',
    cart: 'Cart',
  };
  const press = (nav: string[]) => {
    dispatch(signOut());
    nav.push('login');
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
              height: 100,
            },
            gestureEnabled: false,
            headerLeft: () => <></>,
            headerRight: () => (
              <Button
                loading={false}
                style={styles.button}
                activeOpacity={0.6}
                disabled={false}
                onPress={() => {
                  press(navigation);
                }}>
                <Text style={{color: 'white'}}>X</Text>
              </Button>
            ),
          })}
        />

        {/* <Stack.Screen
          name={routes.cart}
          component={<View />}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          options={({navigation}) => ({
            title: '',
          })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
