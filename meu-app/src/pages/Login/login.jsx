import { useState } from "react";
import { SaveButton } from "../../components/SaveButton";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./style.css";

export function Login() {
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  
  const navigate = useNavigate();

  const handleEntrar = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch("/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ telefone, senha }),
      });

      if (resposta.ok) {
        const dados = await resposta.json();

        localStorage.setItem("token", dados.token);

        console.log("Login feito com sucesso!");
        
        navigate("/home"); 
      } else {
        alert("Telefone ou senha incorretos.");
      }
    } catch (erro) {
      console.error("Erro ao tentar conectar com o servidor:", erro);
      alert("O servidor está fora do ar.");
    }
  };

  return (
    <>
      <img className="logo" src={Logo} alt="Logo Skate na Base" />

      <form className="modalLogin" onSubmit={handleEntrar}>
        <div className="tituloLogin">
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