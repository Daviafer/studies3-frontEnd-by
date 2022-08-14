import React from "react";
import ReactDOM from "react-dom";
import Bomdia from "./componentes/Bomdia";
// import Primeiro from "./componentes/Primeiro"
import Multi, { BoaNoite } from "./componentes/Multiplos";
import Saudacao from './componentes/Saudacao'
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

ReactDOM.render(
  <>
    <Bomdia nome="Eu mesmo" idade={28} />
    <hr />
    {/* Multiplos */}
    <Multi.BoaTarde nome="Ana" />
    <BoaNoite nome="Fulano" />
    <hr />
    {/* saudação - Componente de classe */}
    <Saudacao tipo="Bom dia " nome="João" />

    {/* Componente - Pai e filho */}
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" sobrenome="Silva"></Filho> 
      <Filho nome="Gregui" sobrenome="Silva"></Filho> 
      <Filho nome="Carla" sobrenome="Silva"></Filho> 
    </Pai>
  </>
  , document.getElementById('root')
)

// -----------------------
// - - - Saudação
// -----------------------
