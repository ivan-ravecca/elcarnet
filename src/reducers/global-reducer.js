const initialStore = {
    categories: [],
    products: []
};

const GlobalReducer = (state = initialStore, action) => {
    switch(action.type) {
        case 'LOAD_BULK_DATA':
            return action.result
            //return Object.assign({}, state, action.result);
        default:
        break;
    }
    return state;
};

export default GlobalReducer;