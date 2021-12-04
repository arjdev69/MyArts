import React from 'react';

//import Icon from 'react-native-vector-icons/MaterialIcons';

import {View, TextInput} from 'react-native';

export interface Props {
  styleBox: {};
  style: {};
  colorIcon: string | any;
  icon: string | any;
}

const Input: React.FC<Props> = props => {
  return (
    <View style={props.styleBox}>
      {props.icon && (
        <View />
        // <Icon name={props.icon} size={30} color={props.colorIcon} />
      )}
      <TextInput {...props} />
    </View>
  );
};

export default Input;
