import "./App.css"
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <App />
);