// import React, { useState, useEffect } from "react";
import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // Start otra manera
  // const [count, setCount] = useState(0);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);
  // End otra manera de ver
  // getGifs(); // una manera repetitiva

  const { data: images, loading } = useFetchGifs(category);
  // console.log(loading);

  return (
    <>
      <h3>{category}</h3>
      {/* {loading ? "Cargando..." : "Data cargada!"} */}
      {loading && <p>Cargando...</p>}

      <div className="card-grid">
        {/* <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>{category}</button> */}
        {/* <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
          ))}
        </ol> */}

        {images.map((img) => (
          <GifGridItem
            key={img.id}
            //  img={img}
            {...img} //otra forma de mostrar
          />
        ))}
      </div>
    </>
  );
};
