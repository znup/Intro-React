import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  // const categories = ["One Punch", "Kimetsu no Yaiba", "Valkirie"];
  const [categories, setCategories] = useState(["Rick Morty"]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "Assasin"]); //Agrega al final
  //   // setCategories(["Assasin", ...categories]);//Agrega al inicio
  //   setCategories((cats) => [...cats, "SAO"]);

  //   console.log(setCategories);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
          // return <li key={category}>{category}</li>;
          // los keys vienen de las base de datos, no debe ser el indice y debe ser unico
          // se pone un parentesis para dar a entender que regresa una lista
        ))}
      </ol>
    </>
  );
}
