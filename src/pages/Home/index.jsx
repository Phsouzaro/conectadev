import React from "react";
import './style.css'

import Header from "./components/Header";
import Main from "./components/Main";

export default () => {
    return(
        <div className="content">
            <Header />
            <Main />
        </div>
    )
}