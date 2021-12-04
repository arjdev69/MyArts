import React from 'react';
import {View} from 'react-native';

export interface Props {
  styles: {};
  children: any;
}

const Box: React.FC<Props> = props => {
  return <View style={props.styles}>{props.children}</View>;
};

export default Box;
