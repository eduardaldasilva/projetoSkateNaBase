import { AppRoutes } from "./routes/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import Fundo from "../src/assets/fundoAzul.png";
import "../src/pages/Login/style.css";

export function App() {
  return (
    <BrowserRouter>
      <div className="fundo">
        <Navbar />
        <img src={Fundo} alt="fundo azul e preto ondulado" />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
