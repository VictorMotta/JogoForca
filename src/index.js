import React from "react";
import ReactDOM from "react-dom/client";
import palavras from "./palavras";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App palavras={palavras} />
    </React.StrictMode>
);
