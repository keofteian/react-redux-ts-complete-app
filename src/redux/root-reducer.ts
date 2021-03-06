import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import flagReducer from './flag/flag.reducer';
import userReducer from './users/users.reducer';
import ageReducer from './age/age.reducer';
import studentsReducer from './students/students.reducer';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    flag: flagReducer,
    users: userReducer,
    age: ageReducer,
    students: studentsReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);