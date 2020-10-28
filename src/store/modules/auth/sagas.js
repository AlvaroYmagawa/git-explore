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

const setDefaultHeader = token => {
  api.server.defaults.headers.Authorization = `Bearer ${token}`;
};

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    setDefaultHeader(token);
  }
}

// SIGN UP
export function* signUp({ payload }) {
  try {
    const { user } = payload;

    const response = yield call(api.server.post, 'api/users', user);

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

    const response = yield call(api.server.post, '/sessions', session);

    if (validResponseStatus(response.status)) {
      const { token, user } = response.data;

      setDefaultHeader(token);

      yield put(signInSuccessful(token, user));
    }
  } catch (err) {
    yield put(signInFailed());
  }
}

export default all([
  takeLatest(types.SIGN_UP.REQUEST, signUp),
  takeLatest(types.SIGN_IN.REQUEST, signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
