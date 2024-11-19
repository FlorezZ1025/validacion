/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import { SignIn } from "../src/pages/features/Auth.tsx";


describe("Componente SignIn", () => {
  it("debería lanzar un error si faltan credenciales", async () => {
    const username = "";
    const password = "";
    await expect(SignIn(username, password)).rejects.toThrow("Faltan credenciales");
  });

  it("debería devolver un token válido con credenciales correctas", async () => {
    const result = await SignIn("user", "pass");
    const value = {token: "12345"};
    expect(result).toEqual(value);
  });

  it("debería lanzar un error con credenciales incorrectas", async () => {
    const username = "user";
    const password = "bababa";

    await expect(SignIn(username, password)).rejects.toThrow("Credenciales inválidas");
  });
});
