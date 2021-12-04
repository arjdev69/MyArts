import {createStore, compose, applyMiddleware, Action, Reducer} from 'redux';

export default (reducers: Reducer<unknown, Action<any>>, middlewares: any) => {
  const enhancer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
