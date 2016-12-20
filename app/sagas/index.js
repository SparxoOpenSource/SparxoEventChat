import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import services from '../services';
import actions from '../actions';

function* loadEvents() {
    while (true) {
        yield take(actions.eventActions.LOAD_EVENTS_REQUEST);
        const {events, error} = yield call(services.eventServices.fetchEvents);
        if (events) {
            yield put({ type: actions.eventActions.LOAD_EVENTS_SUCCESSED, events });
        }
        else {
            yield put({ type: actions.eventActions.LOAD_EVENTS_FAILED, error });
        }
    }
}

export default function* root() {
    yield [
        fork(loadEvents)
    ]
}