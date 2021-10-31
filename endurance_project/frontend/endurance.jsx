import React from "react";
import ReactDOM from "react-dom";
import {logout} from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.logout = logout;
  
    ReactDOM.render(<h1>Welcome to Endurance</h1>, root);
});