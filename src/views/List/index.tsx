import React, {useEffect} from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getListArts} from 'store/modules/Arts/actions';

import {List} from 'container';
import {Loading} from 'components';
import {COLORS} from 'styles';
import {styles} from 'views/Login/styles';

const ListView: React.FC = () => {
  const dispatch = useDispatch();
  const artsData = useSelector((state: any) => state.Arts);

  const fetchApi = () => {
    dispatch(getListArts());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <UI.View>
      {artsData.loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={styles.loading}
        />
      )}
      <List _data={artsData.arts} />
    </UI.View>
  );
};

export default ListView;
