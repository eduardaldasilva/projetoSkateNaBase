import "./style.css";
import Logo from "../../assets/logo.png";

function Home() {
  return (
    <div className="fundo">
      <div className="tela">
        <img src={Logo} alt="Logo Skate na Base" className="logo" />
        <form className="form">
          <h1 className="titulo">Entrar</h1>
          <p className="field1">Telefone:</p>
          <input className="label1" placeholder="Telefone" type="text" />
          <p className="field2">Senha:</p>
          <input className="label2" placeholder="Senha" type="password" />
          <button className="botao-transparente" type="button">
            <p className="texto-link">
              Esqueceu sua senha? Clique aqui para recuperar.
            </p>
          </button>
          <div className="botoes">
            <button className="botao-criar" type="button">
              Criar conta
            </button>
            <button className="botao-entrar" type="button">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
