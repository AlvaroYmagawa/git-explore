import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// CUSTOM IMPORTS
import types from './types';
import {
  signUpSuccessful,
  signUpFailed,
  signInSuccessful,
  signInFailed,
} from './actions';
import api from '~/services/api';
import { validResponseStatus } from '~/utils/api';

// SIGN UP
export function* signUp({ payload }) {
  try {
    const { user } = payload;

    const response = yield call(api.reqres.post, 'api/users', user);

    if (validResponseStatus(response.status)) {
      const newUser = response.data;

      yield put(signUpSuccessful(newUser));

      toast.info(`Usuário ${newUser.name} criado com sucesso`);
    }
  } catch (err) {
    yield put(signUpFailed());
  }
}

// SIGN IN
export function* signIn({ payload }) {
  try {
    const { session } = payload;

    const response = yield call(api.reqres.post, 'api/login', {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });

    if (validResponseStatus(response.status)) {
      const { token } = response.data;

      yield put(signInSuccessful(token, session));
    }
  } catch (err) {
    yield put(signInFailed());
  }
}

export default all([
  takeLatest(types.SIGN_UP.REQUEST, signUp),
  takeLatest(types.SIGN_IN.REQUEST, signIn),
]);
