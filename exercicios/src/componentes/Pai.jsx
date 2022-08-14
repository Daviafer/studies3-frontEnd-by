import React from "react";
import Filho from "./Filho";

export default props =>
<div>
  <h3>Nome Pai: {props.nome} {props.sobrenome}</h3>
  <h4>Filhos</h4>
  <ul>
    {
      React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          ...props, ...child.props
        })
      })
    }

    {/* <Filho nome="Pedro" sobrenome={props.sobrenome} /> */}
    {/* operador spread - pegando as propriedades do pai e passando pros filhos. */}
    {/* <Filho {...props}/> fica o nome do Pai */}
    {/* <Filho {...props} nome="Carla" /> */}
  </ul>
</div>