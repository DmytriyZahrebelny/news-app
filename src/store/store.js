import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './root-saga';

export const initStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};
