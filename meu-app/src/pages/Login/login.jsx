import { useState } from "react";
import { SaveButton } from "../../components/SaveButton";
import { Home } from "../Home/home";
import Logo from "../../assets/logo.png";
import "./style.css";

export function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  if (isLogged) {
    return <Home />;
  }

  return (
    <>
      <img className="logo" src={Logo} alt="Logo Skate na Base" />

      <form className="modalLogin">
        <div className="titulo">
          <h1>Entrar</h1>
        </div>

        <div className="camposLogin">
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            type="tel"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
          <div className="botaoEntrar">
            <SaveButton>Entrar</SaveButton>
          </div>
        </div>
      </form>
    </>
  );
}
