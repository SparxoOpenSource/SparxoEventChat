import { combineReducers } from 'redux';

import * as eventReducers from './events';

export default combineReducers(
    eventReducers
);

