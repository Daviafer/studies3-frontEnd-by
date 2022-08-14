import React, { Component } from "react";

export default class Saudacao extends Component{
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
    // tipo: "fixo",
  }

  constructor(props){
    super(props)

    this.setTipo = this.setTipo.bind(this)
    // this.setNome = this.setNome.bind(this) /* usei outra forma arrow function */
  }

  setTipo(e){
    this.setState({ tipo: e.target.value})
    // this.props.tipo = e.target.value
  }
  setNome(e){
    this.setState({nome: e.target.value})
  }
  render(){
    const {tipo, nome} = this.state
    return(
      <div>
        <h3>{tipo}{nome}</h3>
        <br/> 
        <input type="text" placeholder="Tipo ..." value={tipo} onChange={this.setTipo} />
        <input type="text" placeholder="Nome ..." value={nome} onChange={e => this.setNome(e)} />
      </div>
    )
  }
}