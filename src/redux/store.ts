import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

// import { watchAgeUp } from '../sagas/saga';
// import rootSaga from '../redux/students/students.saga';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

export const store: any = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);
sagaMiddleware.run(sagas);

export const persistor = persistStore( store );

export default { store, persistStore };