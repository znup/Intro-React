import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getSaludo debe de retornar hola Adan", () => {
    const nombre = "Adan";

    const saludo = getSaludo(nombre);
    // console.log(saludo);

    expect(saludo).toBe("Holis " + nombre);
  });
  // Tarea debe retornar Holis Jaime si no hay argumento nombre

  test("getSaludo debe de retornar Holis Jaime", () => {
    const saludo = getSaludo();
    // console.log(saludo);

    expect(saludo).toBe("Holis Jaime");
  });
});
