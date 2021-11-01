import React from "react";
import ReactDOM from "react-dom";
import {logout} from "./util/session_api_util"
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store
    window.getState = store.getState;
   
    ReactDOM.render(<h1>Welcome to Endurance</h1>, root);

});