import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProducTable from "./ProductTable";
import * as serviceWorker from "./serviceWorker";

const products = [
  { categorie: "Electronics", price: 150, name: "fridge" },
  { categorie: "Electronics", price: 350, name: "tv" },
  { categorie: "clothes", price: 50, name: "shoes" }
];

ReactDOM.render(
  <React.StrictMode>
    <ProducTable data={products} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
