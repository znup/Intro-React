import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("should retornar un Heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("should retornar undifine si Heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });
  test("Debe retornar un arreglo con los Heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((ho) => ho.owner === owner);
    expect(heroes).toEqual(heroesData);
    // console.log(heroeData);
  });
  test("Debe retornar un arreglo con los Heroes de Marvel", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    expect(heroe.length).toBe(2);
    // console.log(heroe);
  });
});
