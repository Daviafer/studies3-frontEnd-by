import React from "react";

// export default () => <h1>Bom dia </h1>

// -------- ---------
// setando nome no index.js
//-------- ---------
// usando array
export default props =>
  [
    <h3 key='h1'>Bom dia {props.nome} {props.idade}</h3>,
    <h4 key='h2'>Até logo</h4>
  ] 

// outra forma 

// export default props =>
//   <React.Fragment>
//     <h1>Bom dia {props.nome} {props.idade}</h1>
//     <h2>Até logo</h2>
//   </React.Fragment> 