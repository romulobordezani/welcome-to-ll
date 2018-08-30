import { fork } from 'redux-saga/effects';
import address from './address';

export default function* root() {
  yield fork(address);
}
