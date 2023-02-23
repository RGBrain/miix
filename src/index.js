import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
