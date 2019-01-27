import Api from '../api/api';

export function loadBulkData(data) {
    return {type: 'LOAD_BULK_DATA', result: data};
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