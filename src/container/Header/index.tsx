import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconDesign from 'react-native-vector-icons/AntDesign';

import {COLORS} from 'styles';
import {styles, Container, LabelText, ButtonCustom} from './styles';
import {Button} from 'components';
import {View} from 'react-native';
import {APPLABELS} from 'utils/Constants';
import {signOut} from 'store/modules/auth/actions';

const Header: React.FC<Props> = _props => {
  const dispatch = useDispatch();
  const [changeView, setChangeView] = useState(false);
  const {user} = useSelector((state: any) => state.Auth);

  return (
    <Container>
      {changeView ? (
        <View style={styles.viewButton}>
          <Button
            loading={false}
            style={styles.button}
            activeOpacity={0.6}
            disabled={false}
            onPress={() => {
              dispatch(signOut());
              _props.nav.push('login');
            }}>
            <IconDesign name="logout" size={24} color={COLORS.lightColor} />
          </Button>
          <LabelText>{APPLABELS.logout}</LabelText>
          <Button
            loading={false}
            style={styles.btnClose}
            activeOpacity={0.6}
            disabled={false}
            onPress={() => {
              setChangeView(!changeView);
            }}>
            <IconDesign name="close" size={24} color={COLORS.lightColor} />
          </Button>
        </View>
      ) : (
        <>
          <ButtonCustom
            loading={false}
            activeOpacity={0.6}
            disabled={false}
            onPress={() => {
              setChangeView(!changeView);
            }}>
            <Icon name="user" size={48} color={COLORS.lightColor} />
          </ButtonCustom>
          <LabelText>{user.name ? user.name.toUpperCase() : ''}</LabelText>
        </>
      )}
    </Container>
  );
};

export default Header;
