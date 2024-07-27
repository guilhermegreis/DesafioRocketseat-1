import React from "react";
import ReactDOM from "react-dom/client";
import { InputTask } from "./components/InputTask";
import { ListingTasks } from "./components/ListingTasks";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InputTask />
    <ListingTasks />
  </React.StrictMode>
);
