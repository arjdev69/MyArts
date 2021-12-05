import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getDetailArt, getListArts} from 'store/modules/Arts/actions';

import {List} from 'container';

const ListView: React.FC = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const artsData = useSelector((state: any) => state.Arts);

  const fetchApi = () => {
    dispatch(getListArts());
  };

  useEffect(() => {
    fetchApi({});
  }, []);

  console.log('1', artsData.loading);

  return (
    <UI.View style={{backgroundColor: 'red'}}>
      <List />
    </UI.View>
  );
};

export default ListView;
