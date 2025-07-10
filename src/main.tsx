import { createRoot } from "react-dom/client";
import "./style.css";
import Routes from "./route/Routes.tsx";

createRoot(document.getElementById("root")!).render(<Routes />);
