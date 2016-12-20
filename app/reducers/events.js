import actions from '../actions';

const eventActions = actions.eventActions;

const initialState = {
    events: [],
    isLoading: false,
    error: ''
};

export const loadEvents = (state = initialState, action) => {
    switch (action.type) {

        case eventActions.LOAD_EVENTS_REQUEST:
            return Object.assign({}, state, { isLoading: true, error: '' });

        case eventActions.LOAD_EVENTS_SUCCESSED:
            let newEvents = action.events;
            return { isLoading: false, events: newEvents, error: '' };

        case eventActions.LOAD_EVENTS_FAILED:
            return Object.assign({}, state, { isLoading: false, error: action.error });

        default:
            return state;
    }
}