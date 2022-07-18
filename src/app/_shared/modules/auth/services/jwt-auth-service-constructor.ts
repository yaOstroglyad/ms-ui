import {AuthService} from '../models/auth-service';

interface JwtAuthServiceResponse {
  token: string;
}

type AuthServiceConstructor<Options> = (options: Options) => AuthService<JwtAuthServiceResponse>
type JwtAuthServiceConstructorOptions = {}

export const jwtAuthServiceConstructor: AuthServiceConstructor<JwtAuthServiceConstructorOptions> = (): AuthService<JwtAuthServiceResponse> => ({
  login: (userName: string, password: string) => {
    return Promise.resolve({token: 'token'})
  },
  logout: () => Promise.resolve(),
  refresh: () => Promise.resolve({token: 'token'}),
});
