import React from 'react';

import * as UI from 'react-native';

export interface Props {
  children: any;
  loading: boolean;
  disabled: boolean;
  onPress: any;
  style: {};
  activeOpacity: number;
}

const ButtonCustom: React.FC<Props> = _props => {
  return (
    <UI.TouchableOpacity
      {..._props}
      style={_props.style}
      onPress={_props.onPress}
      disabled={_props.loading || _props.disabled}>
      {_props.loading ? (
        <UI.ActivityIndicator size="small" color="#FFF" />
      ) : (
        _props.children
      )}
    </UI.TouchableOpacity>
  );
};

export default ButtonCustom;
