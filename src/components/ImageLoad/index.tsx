import React from 'react';
import * as UI from 'react-native';

export interface Props {
  styles: {};
  url: {};
  urlLoad: {};
}

const ImageLoad: React.FC<Props> = _props => {
  return (
    <UI.Image
      style={_props.styles}
      source={_props.url}
      progressiveRenderingEnabled={true}
      loadingIndicatorSource={_props.urlLoad}
    />
  );
};

export default ImageLoad;
