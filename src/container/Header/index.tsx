import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from 'styles';
import {Container, LabelText, ButtonCustom} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ButtonCustom
        loading={false}
        activeOpacity={0.6}
        disabled={false}
        onPress={() => {}}>
        <Icon name="user" size={48} color={COLORS.lightColor} />
      </ButtonCustom>
      <LabelText>Texto</LabelText>
    </Container>
  );
};

export default Header;
