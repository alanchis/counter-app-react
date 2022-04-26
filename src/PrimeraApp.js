import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitulo }) => {
  const saludo1 = "hola mundo const";

  console.log(saludo1);

  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera app</p>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};

export default PrimeraApp;
