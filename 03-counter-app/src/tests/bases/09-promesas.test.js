import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync should de retornar un Heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      // expect(true).toBe(false);
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  // usar done para test asincronos
  test("should de obtener un error si el Heroe por id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el heroe");
      done();
    });
  });
});
