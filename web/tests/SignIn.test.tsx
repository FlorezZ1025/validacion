/* eslint-disable prettier/prettier */
import { describe, it, expect } from 'vitest';
import { SignIn } from '../src/pages/m/Auth.tsx';

describe('Componente SignIn', () => {
  it('debería lanzar un error si faltan credenciales', async () => {
    await expect(SignIn('', '')).rejects.toThrow('Faltan credenciales');
  });

  it('debería devolver un token válido con credenciales correctas', async () => {
    const result = await SignIn('user', 'pass');
    expect(result).toEqual({ token: '12345' });
  });

  it('debería lanzar un error con credenciales incorrectas', async () => {
    await expect(SignIn('user', 'wrong')).rejects.toThrow('Credenciales inválidas');
  });
});
