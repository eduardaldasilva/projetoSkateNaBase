import { AppRoutes } from "./routes/index.jsx";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import Fundo from "../src/assets/fundoAzul.png";
import "../src/pages/Login/style.css";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div className="fundo">
      {!isHome && <img src={Fundo} alt="fundo azul e preto ondulado" />}

      <Navbar />
      <AppRoutes />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
