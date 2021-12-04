import React from 'react';

import * as UI from 'react-native';

export interface Props {
  size: number | 'small' | 'large' | undefined;
  color: string;
  styles: {};
}

const Loading: React.FC<Props> = _props => {
  return (
    <UI.View style={_props.styles}>
      <UI.ActivityIndicator {..._props} />
    </UI.View>
  );
};

export default Loading;
