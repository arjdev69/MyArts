import React from 'react';
import {Text, View} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';

export interface Props {
  style: {};
  viewStyle: {};
  icon: any;
}

const Label: React.FC<Props> = props => {
  return (
    <View style={props.viewStyle}>
      {props.icon && <Icons name={props.icon} size={25} color="#FFF" />}
      <Text style={props.style}>{props.children}</Text>
    </View>
  );
};

export default Label;
