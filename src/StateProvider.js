import React, {createContext, useContext, useReducer} from "react";

export const StateContext= createContext(); 

export const StateProvider = ({ reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer (reducer,
        initialState)}>
            {children}
        </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// Preares the data layer with a high order component
// We pass reducer and intial state
// Reducers listens to changes on what we need from the data layer.
// Hook which allows us to pull information from the data layer
