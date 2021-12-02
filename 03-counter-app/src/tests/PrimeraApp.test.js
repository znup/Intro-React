import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";
// import { render } from "@testing-library/react";

describe("Prueba de mi <PrimeraApp />", () => {
  // test("Debe mostrar el mensaje 'Un saludo'", () => {
  //   const saludo = "Un saludo";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   //wrapper producto renderizado que quiero mostrar
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("Debe mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Un saludo mas";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Un saludo mas  ";
    const subTitulo = "Es un subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const txtParrafo = wrapper.find("p").text();

    expect(txtParrafo).toBe(subTitulo);
    // console.log(txtParrafo);
  });
});
