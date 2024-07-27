import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/global.css";
import {worker} from "./mock/msw/workers";

if (process.env.NODE_ENV === "development") {
    worker.start();
}

export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
