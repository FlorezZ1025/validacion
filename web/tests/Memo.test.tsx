/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import { CopyLink, DeleteMemo, ToFile } from "../src/pages/features/Memo";

describe("Memo options", () => {
  it("debería archivar un memo", async () => {
    const result = await ToFile();
    expect(result).toBe("Archived successfully");
  });

  it("debería eliminar un memo", async () => {
    const result = await DeleteMemo();
    expect(result).toBe("Deleted Succesfully");
  });

  it("debería copiar un enlace", async () => {
    const result = await CopyLink();
    expect(result).toBe("Enlace copiado correctamente");
  });
});
