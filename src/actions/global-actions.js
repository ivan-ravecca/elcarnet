import Api from '../api/api';

export function loadBulkData(data) {
    return {type: 'LOAD_BULK_DATA', result: data};
}

export function doneGetInTouch(status) {
    return {type: 'DONE_GET_IN_TOUCH', status: status};
}

export function pullData() {
    return function(dispatch) {
        return Api.getBulkData().then(result => {
            dispatch(loadBulkData(result));
        }).catch(error => {
            throw error;
            // dispatch(loadBulkData({}));
        })
    }
}

export function getInTouch(body) {
    return function(dispatch) {
        return Api.getInTouch(body).then(result => {
            dispatch(doneGetInTouch(result));
        }).catch(error => {
            throw error;
            // dispatch(doneGetInTouch(false));
        })
    }
}