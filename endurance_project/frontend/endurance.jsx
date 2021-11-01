import React from "react";
import ReactDOM from "react-dom";
import {logout} from "./util/session_api_util"
import {store} from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store
   
    ReactDOM.render(<h1>Welcome to Endurance</h1>, root);

});