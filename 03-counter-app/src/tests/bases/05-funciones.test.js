import "@testing-library/jest-dom";
import { getUser, getUserActive } from "../../base/05-funciones";

describe("Pruebas de 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ADF34",
      username: "Elex",
    };

    const user = getUser();

    // console.log(user);

    expect(user).toEqual(userTest);
  });
  // Tarea getUsuarioActivo debe retornar un objeto
  test("getUsuarioActivo debe retornar un objeto y nombre", () => {
    // const name2 = "NickName";
    // const userActiveTest = {
    //   uid: "AD0001",
    //   username: name2,
    // };
    // const userActTest = getUserActive(name2);
    // console.log(userActTest);
    // expect(userActTest).toEqual(userActiveTest);
    const name2 = "Menganito";
    const user = getUserActive(name2);
    expect(user).toEqual({
      uid: "AD0001",
      username: name2,
    });
  });
});
