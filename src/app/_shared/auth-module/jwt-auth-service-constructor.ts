import {AuthService} from './auth-service.interface';

type AuthServiceConstructor<Options> = (options: Options) => AuthService

type JwtAuthServiceConstructorOptions = {}

export const jwtAuthServiceConstructor: AuthServiceConstructor<JwtAuthServiceConstructorOptions> = (): AuthService => ({
  login: (email: string, passwprd: string) => Promise.resolve({}),
  logout: () => Promise.resolve(),
});
