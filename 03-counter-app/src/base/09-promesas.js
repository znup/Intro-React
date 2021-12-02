import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        return resolve(p1);
      } else {
        return reject("No se pudo encontrar el heroe");
        // console.log(p1)
      }
      // resolve(p1);
    }, 500);
  });
};
