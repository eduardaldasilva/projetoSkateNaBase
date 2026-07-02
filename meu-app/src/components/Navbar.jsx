import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login" || location.pathname === "/") {
    return null;
  }

  const handleSair = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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

      <button className="botao-sair" onClick={handleSair}>
        Sair
      </button>
    </nav>
  );
}
