import { useContext } from "react";
import { Contexto } from "./JogoContext";

export default function App() {
  const { estado, enviar } = useContext(Contexto);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Jogo das Cores</h1>
      <p>Clique em uma garrafa e depois em outra:</p>

      <div style={{ display: "flex", gap: "20px" }}>
        {estado.garrafas.map(function (cores: any, i: any) {
          return (
            <div
              key={i}
              onClick={function () {
                enviar({ tipo: "clicar", posicao: i });
              }}
              style={{
                width: "60px",
                height: "150px",
                border: estado.selecionada === i ? "3px solid orange" : "2px solid black",
                display: "flex",
                flexDirection: "column-reverse",
                padding: "5px"
              }}
            >
              {cores.map(function (c: any, j: any) {
                return (
                  <div
                    key={j}
                    style={{
                      height: "30px",
                      backgroundColor: c,
                      marginBottom: "2px"
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}