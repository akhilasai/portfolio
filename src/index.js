import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Routes from './Routes'
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";
import { Provider } from 'react-redux';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Routes />
    <Analytics
      beforeSend={(event) => {
        // Ignore all events that have a `/private` inside the URL
        if (event.url.includes("localhost")) {
          return null;
        }
        return event;
      }}
    />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
