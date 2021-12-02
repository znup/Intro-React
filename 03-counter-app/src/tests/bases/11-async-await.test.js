import { getImagen } from "../../base/11-async-await";

describe("Prueba de 11-async-await y Fetch", () => {
  test("should retornar el URL de la imagen", async () => {
    const url = await getImagen();
    // console.log(url);
    // expect(typeof url).toBe("string");
    expect(url.includes("https://")).toBe(true);
  });
});
