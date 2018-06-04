// ### Create the store
// * Create a store.js file
// * Import createStore from redux
// * Import state from state.js
// * Import reducers from reducers/index
// * Create the store and export it

//we have decided that we are using redux so we have to install and  import it
import {createStore} from 'redux';
//we need our data to put in the database
import state from "./state";
//just take this reducers thing for granted right now
import reducers from "./reducers";
let store = createStore(reducers,state);

export default store;

//boiler plate template

