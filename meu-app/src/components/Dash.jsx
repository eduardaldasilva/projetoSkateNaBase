import { useState, useEffect } from "react";
import { apiFetch } from "../services/api.js";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 10,
};

const formatAxisTick = (value) => {
  return `Turma ${value}`;
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {value}
    </text>
  );
};

export default function Grafico() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await apiFetch("/dashboard");
        if (resposta.ok) {
          const resultado = await resposta.json();
          setDados(resultado);
        }
      } catch (erro) {
        console.error(erro);
      }
    };

    buscarDados();
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      style={{ marginTop: "40px" }}
    >
      <BarChart data={dados} margin={margin}>
        <XAxis
          dataKey="id_turma"
          tickFormatter={formatAxisTick}
          label={{
            position: "insideBottomRight",
            value: "Turmas",
            offset: -10,
          }}
        />
        <YAxis
          label={{
            position: "insideTopLeft",
            value: "Alunos",
            angle: -90,
            dy: 60,
          }}
        />
        <Tooltip />

        <Bar dataKey="qtd_alunos" fill="#007EFF" label={renderCustomBarLabel} />
      </BarChart>
    </ResponsiveContainer>
  );
}
