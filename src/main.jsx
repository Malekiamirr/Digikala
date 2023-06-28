import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";

import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ApiProvider api={apiSlice}>
    <App />
   </ApiProvider>
  </React.StrictMode>
);
