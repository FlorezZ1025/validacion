/* eslint-disable prettier/prettier */
import { describe, it, expect, vi } from "vitest";
import { CopyLink, createMemo, DeleteMemo, ToFile } from "../src/pages/features/Memo";

vi.mock("@store/**");

describe("Memo options", () => {
  it("Should file a memo", async () => {
    const text = {
      user: 1,
      txtId: 1,
    };

    const value = "Archived successfully";

    const result = (await ToFile(text)).mockValue(value);

    expect(result).toBe(value);
  });

  it("Should delete a memo", async () => {
    const value = "Deleted Succesfully";

    const result = (await DeleteMemo()).mockValue(value);

    expect(result).toBe(value);
  });

  it("Should copy a file", async () => {
    const result = await CopyLink();

    const value = "Enlace copiado correctamente";

    expect(result).toBe(value);
  });

  it("Should create a memo", async () => {
    const text = {
      user: 1,
      message: "Hola desde prueba unitaria",
    };

    const value = text.message;

    const result = await createMemo(text);

    expect(result.message).toBe(value);
    expect(result).toHaveProperty("txtId");
  });
});
