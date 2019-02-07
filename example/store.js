/*
 * @promotively/react-redux-form
 *
 * @copyright (c) 2018-2019, Promotively
 * @author Steven Ewing <steven.ewing@promotively.com>
 * @see {@link https://www.github.com/promotively/react-redux-form}
 * @license MIT
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { formReducer, formInputReducer } from '../src/index';
import thunk from 'redux-thunk';

const createReduxStore = () => createStore(
  combineReducers({
    form: formReducer,
    formInput: formInputReducer
  }),
  applyMiddleware(...[ thunk ])
);

export default createReduxStore;
