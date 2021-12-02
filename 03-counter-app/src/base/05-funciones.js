// funciones JS

// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

// const saludar2 = (nombre) => {
//   return `Hola, ${nombre}`;
// }

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola mundo`;

// console.log(saludar3('Adan'));
// console.log(saludar4());

// const getUser = () => {
//   return {
//     uid: 'ADF34',
//     username: 'Elex',
//   }
// }
//funcion flecha con return
// funcion flecha sin return
export const getUser = () => ({
  uid: "ADF34",
  username: "Elex",
});

// console.log(getUser());

export function getUserActive(name2) {
  return {
    uid: "AD0001",
    username: name2,
  };
}

const userActive = getUserActive("Adan");
// console.log(userActive);

// transformar a funcion flecha
// retornar un objeto implicito
//pruebas

const getUserActive2 = (name) => ({
  uid: "AD0002",
  username: name,
});
const userActive2 = getUserActive2("Sir Z");
// console.log(userActive2);
