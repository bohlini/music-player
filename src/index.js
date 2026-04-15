import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// REVIEW: StrictMode is not used — wrapping with `<React.StrictMode>` would help catch issues like missing cleanup in effects, deprecated APIs, and unexpected side effects during development.
root.render(
  <>
    <App />
  </>,
);
