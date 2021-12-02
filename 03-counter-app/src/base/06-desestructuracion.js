// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

// const { edad, clave, nombre } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ nombre, edad, rango = "Capitán" }) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);

const usContext = ({ clave, edad }) => {
  return {
    nameClave: clave,
    age: edad,
    latlng: {
      lat: 85.6451,
      lng: -55.44876,
    },
  };
};
// const avenger = usContext(persona);
// console.log(avenger);
const {
  age,
  nameClave,
  latlng: { lat, lng },
} = usContext(persona);
console.log(age, nameClave);
console.log(lat, lng);
