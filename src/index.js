import React from "react";
import ReactDom from 'react-dom/client'
// import App from './FunctionComponents2/App'
// import App from './FunctionComponents/App'
import App from "./ClassComponents/App";


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <App/>
)