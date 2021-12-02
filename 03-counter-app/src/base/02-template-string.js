const nombre = "Adan";
const apellido = "Roblero";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = "Jaime") {
  return "Holis " + nombre;
}

// console.log(`Es un texto: ${ getSaludo() }`);
