// ### Reducers
// * Create a new folder called reducers
// * Create a file in this folder called index.js
// * Import combineReducers from redux
// * Create a reducer function for each piece of data in state.js
//   * newComments
//   * newTasks
//   * newOrders
//   * tickets
//   * orders
//   * tasks
//   * messages
// * Remember 2 parameters state and action. Remember to return state
// * Combine the reducers and export

import {combineReducers} from "redux";

function tasks(state = [], action) {
    return state;
}

function newComments(state = 0, action) {
    return state;
}

function newTasks(state = 0, action) {
    return state;
}

function newOrders(state = 0, action) {
    return state;
}

function tickets( state = 0, action) {
    return state;
}

function orders(state = [], action) {
    return state;
}

function messages(state = [], action) {
    return state;
}

const rootReducer = combineReducers({
    tasks, newComments, newOrders, newTasks, tickets, orders, messages
});

export default rootReducer;




