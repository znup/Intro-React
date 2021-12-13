import React from "react";

// export const GifGridItem = ({ img }) => {
//   console.log(img);

//   return <div>{img.title}</div>;
// };
//ver de manera diferente las propiedades
// export const GifGridItem = (props) => {
//   console.log(props);

//   return <div></div>;
// };

export const GifGridItem = ({ id, title, url }) => {
  // console.log({ id, title, url });

  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <hr />
      <p>{title}</p>
      <br />
    </div>
  );
};
