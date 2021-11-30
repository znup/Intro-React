import React from 'react';
import PropTypes from 'prop-types';

// import React, { Fragment } from 'react';

//funcion components

const PrimeraApp = ({ saludo, subtitulo }) => {

  return (
    <>
      <h1>{saludo}</h1>
      {/* no regresa objetos, booleanos */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{ subtitulo }</p>
    </>
  );
  
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Es un subtitulo'
}

export default PrimeraApp;