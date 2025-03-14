export interface LoginCredentials {
  email: string;
  password: string;
}

const MOCK_USER = {
  email: 'pietro.schirano@obvia.com',
  password: '123456'
};

export async function signIn({ email, password }: LoginCredentials) {
  // Simular um delay de rede
  await new Promise(resolve => setTimeout(resolve, 800));

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return {
      success: true,
      data: {
        user: {
          email: MOCK_USER.email,
          name: 'Pietro Schirano'
        },
        token: 'mock-jwt-token'
      }
    };
  }

  return {
    success: false,
    error: 'E-mail ou senha inválidos'
  };
}
