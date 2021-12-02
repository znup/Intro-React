describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales los string", () => {
    // 1.- inicializacion
    const mensaje = "Hi W";

    // 2.- estimulo
    const mensaje2 = `Hi W`;

    //  3.- Observar comportamiento
    expect(mensaje).toBe(mensaje2); // ===
  });
});
