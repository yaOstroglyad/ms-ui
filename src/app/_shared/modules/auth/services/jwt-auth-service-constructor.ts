import {AuthService} from '../models/auth-service';

type AuthServiceConstructor<Options> = (options: Options) => AuthService;
type JwtAuthServiceConstructorOptions = {};

export const jwtAuthServiceConstructor: AuthServiceConstructor<JwtAuthServiceConstructorOptions> = (): AuthService => ({
  login: async (username: string, password: string) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({username, password})});
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve({token: 'token'}),
});
