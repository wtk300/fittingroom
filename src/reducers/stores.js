const  stores = (state = [{id : 1  , name:  'FORUM'}, {id : 2 , name : 'LONDON'}], action) => {
    switch (action.type) {
        case 'ADD_STORE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ];
        default:
            return state;
    }

};

export default stores