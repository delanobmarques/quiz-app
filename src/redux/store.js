// import { createStore } from "redux";
// import reducer from "./reducer";

// export default createStore(reducer);


//******TO DO**********
import thunk from 'redux-thunk';
import {configureStore } from '@reduxjs/toolkit'
import reducer from './reducer';

const store = configureStore({
    reducer: reducer, 
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(thunk)
});

export default store;