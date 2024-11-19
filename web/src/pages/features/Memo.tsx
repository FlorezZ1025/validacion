import { AnyAction } from "@reduxjs/toolkit";

/* eslint-disable prettier/prettier */
export async function ToFile(info: any) {
  const fakeApiResponse = await Promise.resolve({
    mockValue: (res: any) => res,
  });
  return fakeApiResponse;
}

export async function createMemo(info: any) {
    const fakeApiResponse = await Promise.resolve({
      mockValue: (res: any) => res,
      txtId: 1,
      message: info.message
    });
    return fakeApiResponse;
  }

export async function DeleteMemo() {
  const fakeApiResponse = await Promise.resolve({
    mockValue: (res: any) => res,
  });
  return fakeApiResponse;
}

export async function CopyLink() {
  const fakeApiResponse = await Promise.resolve("Enlace copiado correctamente");
  return fakeApiResponse;
}
