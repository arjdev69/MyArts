import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import 'react-native-gesture-handler';

import {store, persistor} from './store';

import RoutesApp from './routes';
import {COLORS} from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={COLORS.darkColor} barStyle={'default'} />
        <RoutesApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
