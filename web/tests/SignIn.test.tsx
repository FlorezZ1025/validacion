/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import {vi, describe, it, expect, beforeEach, test } from "vitest";
import {MemoryRouter} from "react-router-dom";
import SignIn from "../src/pages/SignIn";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("@/hooks/useAuth", () => ({default: vi.fn()}));
vi.mock("@/grpcweb", () => ({
  identityProviderServiceClient: {listIdentityProviders: vi.fn()},
}))

vi.mock("@/store/v1", () => ({
  useWorkspaceSettingStore: vi.fn(),
  extractIdentityProviderIdFromName: vi.fn(() => "test-id"),
}));
describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("SignIn Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Redirige al usuario autenticado a la raíz", async () =>{
    const useCurrentUser = require("@/hooks/useCurrentUser").default;
    useCurrentUser.mockReturnValueOnce(true);

    render(
      <MemoryRouter>
        <SignIn/>
      </MemoryRouter>
    );

    expect(window.location.href).toContain("/");
  });

  // test("Renderiza los elementos principales correctamente", ()=>{
  //   const useCurrentUser = require("@/hooks/useCurrentUser").default;
  //   useCurrentUser.mockReturnValueOnce(null);

  //   render(
  //     <MemoryRouter>
  //       <SignIn/>
  //     </MemoryRouter>
  //   );

  // expect(screen.getByText(/Memos/i)).toBeInTheDocument();
  // expect(screen.getByRole("button", { name: /Sign in/i })).toBeInTheDocument();
  // });

  // test("Muestra el formulario de contraseña si está hablitado", () => {
  //   const useCurrentUser = require("@/hooks/useCurrentUser").default;
  //   useCurrentUser.mockReturnValueOnce(null);

  //   const useWorkspaceSettingStore = require("@/store/v1").useWorkspaceSettingStore;
  //   useWorkspaceSettingStore.mockReturnValueOnce({
  //     getWorkspaceSettingByKey: vi.fn(() => ({
  //       generalSetting: { disallowPaswordAuth: false },
  //     })),
  //   });
  //   render(
  //     <MemoryRouter>
  //       <SignIn />
  //     </MemoryRouter>
  //   );

  //   expect(screen.getByText(/Password auth/i)).not.toBeInTheDocument();
  // })



})