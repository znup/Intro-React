export const getImagen = async () => {
  try {
    const apikey = "FXaSMoeu3zBGBQQ4satMCO5UWDsBumYS";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append( img );

    // console.log(data);
  } catch (error) {
    // manejo de error
    // console.error(error)
    return "No existe";
  }
};

getImagen();
