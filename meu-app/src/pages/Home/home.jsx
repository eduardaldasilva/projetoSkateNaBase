import "./style.css";
import Grafico from "../../components/Dash.jsx";
import Noticias from "../../components/Noticias.jsx";

export function Home() {
  return (
    <div className="fundoHome">
      <div className="tituloHome">
        <h1>Bem-vindo</h1>
      </div>
      <div className="subtitulo">
        <h2>Acompanhe sua evolução e as próximas atividades</h2>
      </div>

      <div className="fundoNoticias">
        <h3 className="tituloNoticia">Noticias</h3>
        <Noticias />
      </div>

      <div className="fundoDashboard">
        <h3 className="dash">Quantidade de alunos por turma:</h3>
        <Grafico />
      </div>
    </div>
  );
}
