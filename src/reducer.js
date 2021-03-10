export const initialState = {
    term: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM:"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
            default:
                return state;
    }
};

export default reducer;

// console log is for debugging purposes. If we change any information from the data layer it will log out the action we dispatched
// Reducer listens for any dispatch actions.
// SET_SEARCH_TERM: is being returned (spread operator)
// 
// 
// 