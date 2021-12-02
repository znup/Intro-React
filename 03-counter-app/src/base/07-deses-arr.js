//desestructuracion con Arrglos

const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
// console.log(p3);

export const retornaArreglo = () => {
  return ["ABC", 123];
};

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

//Tarea
//1 el primer valor del arr se llamara nombre
//2 se llamara setNombre

const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
// const arr = useState('Goku');
// console.log(arr);

const [nombre, setNombre] = usState(personajes);

// console.log(nombre);
// setNombre();
