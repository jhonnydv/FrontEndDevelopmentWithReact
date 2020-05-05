import { createStore } from 'redux';
import { Reducer, initailState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initailState
    )
    return store;
}