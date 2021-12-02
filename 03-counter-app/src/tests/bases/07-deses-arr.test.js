import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-desestructuracion de arreglos", () => {
  test("retornaArreglo debe retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo(); //["ABC", 123]
    // expect(arr).toEqual(["ABC", 123]);
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    // console.log(typeof letras);
    // **********************************************************************
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
    // console.log(typeof numeros);
  });
});
