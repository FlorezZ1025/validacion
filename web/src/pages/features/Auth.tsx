/* eslint-disable prettier/prettier */
export async function SignIn(username: string, password: string) {
    if (!username || !password) {
      throw new Error('Faltan credenciales');
    }
  
    if (username === 'user' && password === 'pass') {
      return { token: '12345' };
    } else {
      throw new Error('Credenciales inválidas');
    }
  }

  export interface RegisterInput {
    username: string;
    password: string;
  }
  
  export const SignUp = async (input: RegisterInput): Promise<string> => {
    const { username, password } = input;
  
    if (!username || !password ) {
      throw new Error("Todos los campos son obligatorios.");
    }

    const fakeApiResponse = await Promise.resolve("Usuario registrado con éxito.");
    return fakeApiResponse;
  };