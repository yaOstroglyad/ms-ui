import {AuthService} from '../models/auth-service';

type AuthServiceConstructor<Options> = (options: Options) => AuthService

type JwtAuthServiceConstructorOptions = {}

export const jwtAuthServiceConstructor: AuthServiceConstructor<JwtAuthServiceConstructorOptions> = (): AuthService => ({
  login: (userName: string, password: string) => Promise.resolve({}),
  logout: () => Promise.resolve(),
});
