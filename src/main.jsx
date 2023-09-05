import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
  import "react-toastify/dist/ReactToastify.css";

  import { ToastContainer, toast } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="Top-center" autoClose={2000} />
    <App />
  </React.StrictMode>
);


