import { createContext, useReducer } from "react";

const inicial = {
  garrafas: [
    ["red", "blue", "red"],
    ["blue", "red", "blue"],
    []
  ],
  selecionada: -1
};

function reducer(estado: any, acao: any) {
  if (acao.tipo === "clicar") {
    const posicao = acao.posicao;

    
    if (estado.selecionada === -1) {
      if (estado.garrafas[posicao].length === 0) {
        return estado;
      }
      return { ...estado, selecionada: posicao };
    }

    
    if (estado.selecionada === posicao) {
      return { ...estado, selecionada: -1 };
    }

    const g1 = estado.garrafas[estado.selecionada];
    const g2 = estado.garrafas[posicao];

    const cor1 = g1[g1.length - 1];
    const cor2 = g2[g2.length - 1];

    
    if (g2.length < 4) {
      if (g2.length === 0 || cor1 === cor2) {
        const nova1 = [...g1];
        const nova2 = [...g2];

        nova1.pop();
        nova2.push(cor1);

        const todas = [...estado.garrafas];
        todas[estado.selecionada] = nova1;
        todas[posicao] = nova2;

        return { garrafas: todas, selecionada: -1 };
      }
    }

    return { ...estado, selecionada: -1 };
  }

  return estado;
}

export const Contexto = createContext<any>(null);

export function Provedor(props: any) {
  const [estado, enviar] = useReducer(reducer, inicial);

  return (
    <Contexto.Provider value={{ estado, enviar }}>
      {props.children}
    </Contexto.Provider>
  );
}