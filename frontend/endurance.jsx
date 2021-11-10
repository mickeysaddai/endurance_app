import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from './components/root';
import {logout} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById("root");
    window.logout = logout;
  
    
    if (window.currentUser){
        const preloadedState = {
            session: {id: window.currentUser.id},
            entities: {users: {[window.currentUser.id]: window.currentUser}}
            
        }
        store = configureStore(preloadedState)
    } else {
        store = configureStore();
    }
    
    window.store = store
    ReactDOM.render(<Root store={store} />, root);

});