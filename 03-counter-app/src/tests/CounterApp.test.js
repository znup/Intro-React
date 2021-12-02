import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Prueba de <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />); //no pierde asi sus propiedades

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Deberia mostrar <CounterApp /> correctamente", () => {
    // const wrapper = shallow(<CounterApp value={0} />);//miTarea
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia mostrar <CounterApp /> el valor por defecto de 100", () => {
    const value = 100;
    console.log(value);
    const wrapper = shallow(<CounterApp value={value} />);
    const valueH2 = wrapper.find("h2").text().trim();
    expect(valueH2).toBe("100.");
  });

  test("Debe de incrementar el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterTxt = wrapper.find("h2").text().trim();
    expect(counterTxt).toBe("1000.");
  });

  test("Debe de resetear el boton Reset", () => {
    const wrapper = shallow(<CounterApp value={8000} />);
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterTxt = wrapper.find("h2").text().trim();
    expect(counterTxt).toBe("8000.");
    // console.log(counterTxt);
  });

  test("Debe de decrementar el boton -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterTxt = wrapper.find("h2").text().trim();
    expect(counterTxt).toBe("-1000.");
  });
});
