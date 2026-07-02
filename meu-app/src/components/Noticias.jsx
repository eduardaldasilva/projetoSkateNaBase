import { useState, useEffect } from "react";
import { apiFetch } from "../services/api.js";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const buscarNoticias = async () => {
      try {
        const resposta = await apiFetch("/noticias");
        if (resposta.ok) {
          const resultado = await resposta.json();
          setNoticias(resultado);
        }
      } catch (erro) {
        console.error(erro);
      }
    };

    buscarNoticias();
  }, []);

  return (
    <div className="lista-noticias">
      {noticias.length > 0 &&
        noticias.map((noticia) => (
          <div key={noticia.id_noticia} className="item-noticia">
            <h4>{noticia.titulo}</h4>
            <p>{noticia.descricao}</p>
          </div>
        ))}
    </div>
  );
}
