import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from './components/root';
import {logout} from './actions/session_actions'
import history from './util/history'
import { WindowRounded } from "@mui/icons-material";

document.addEventListener("DOMContentLoaded", () => {
    let store;
    const root = document.getElementById("root");
    // window.logout = logout;
  
    
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
    window.logout = () => {
        store.dispatch(logout()).then(() => {
            history.push('/#/login')
            window.location.reload()    
        })
        
    }
    ReactDOM.render(<Root store={store} />, root);

});