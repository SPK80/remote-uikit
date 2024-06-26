import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Button } from "./components/uikit";
import { Input } from "./components/uikit";

const App = () => (
  <div className="container">
    <div>Name: remote-uikit</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Кнопка</Button>
    <br />
    <Input onChange={console.log} />
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
