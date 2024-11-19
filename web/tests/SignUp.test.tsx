/* eslint-disable prettier/prettier */
import { describe, expect, it } from "vitest";
import { SignUp } from "../src/pages/features/Auth";

describe("SignUp Component", () => {
  it("debería registrar un usuario con datos válidos", async () => {
    const input = {
      username: "test@example.com",
      password: "123456",
    };

    const result = await SignUp(input);

    expect(result).toBe("Usuario registrado con éxito.");
  });

  it("debería lanzar un error si los campos están vacíos", async () => {
    const input = {
      username: "",
      password: "",
    };

    await expect(SignUp(input)).rejects.toThrow("Todos los campos son obligatorios.");
  });
});
