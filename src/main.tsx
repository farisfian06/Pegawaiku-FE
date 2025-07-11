import { createRoot } from "react-dom/client";
import "./style.css";
import Routes from "./route/Routes.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <>
    <ToastContainer />
    <Routes />
  </>
);
