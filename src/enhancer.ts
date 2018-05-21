import {
  StoreEnhancer,
  StoreEnhancerStoreCreator,
  Reducer,
  DeepPartial,
  AnyAction,
} from 'redux';

interface RootState {
  someKey: string;
}

export const enhancer: StoreEnhancer =
  (createStore: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator =>
    (reducer: Reducer<RootState, AnyAction>, preloadedState?: DeepPartial<RootState>) => {

  const store = createStore(reducer, preloadedState);
  const newDispatch: typeof store.dispatch = <A extends AnyAction>(action: A) => {
    const result = store.dispatch(action);
    return result;
  }
  return {
    ...store,
    dispatch: newDispatch,
  };
};
