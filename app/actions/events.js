export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_SUCCESSED = 'LOAD_EVENTS_SUCCESSED';
export const LOAD_EVENTS_FAILED = 'LOAD_EVENTS_FAILED';

export const loadEventsRequest = () => {
    return { type: LOAD_EVENTS_REQUEST };
}

export const loadEventsSuccessed = (events) => {
    return { type: LOAD_EVENTS_SUCCESSED, events };
}

export const loadEventsFailed = (error) => {
    return { type: LOAD_EVENTS_FAILED, error };
}
