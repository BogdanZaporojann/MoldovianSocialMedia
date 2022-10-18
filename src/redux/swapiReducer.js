let SHOW_SWAPI = 'SHOW-SWAPI';

let initialState = {
    swapiData: []
}

export const swapiReducer = (state=initialState,action) => {
    switch (action.type){
        case SHOW_SWAPI:
            return {
                ...state,
                swapiData: [...state.swapiData, ...action.body]
            };
        default :
            return state;
    }
}


export let SHOW_SWAPI_ACTION_CREATOR = (body) => ({
    type: SHOW_SWAPI,
    body: body
})