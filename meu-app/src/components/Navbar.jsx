import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={Logo} alt="Logo Skate na Base" />

      <ul className="navbar-links">
        <li>
          <Link to="/home">Turmas</Link>
        </li>
        <li>
          <Link to="/perfil">Desempenho</Link>
        </li>
        <li>
          <Link to="/sobre">Frequência</Link>
        </li>
        <li>
          <Link to="/sobre">Notícias</Link>
        </li>
               <li>
          <Link to="/sobre">Usuários</Link>
        </li>
      </ul>

      <button className="botao-sair">Sair</button>
    </nav>
  );
}
