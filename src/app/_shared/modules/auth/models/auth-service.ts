export interface AuthService<LoginResponse> {
  login: (userName: string, password: string) => Promise<LoginResponse>;
  logout: () => Promise<void>;
  refresh: () => Promise<LoginResponse>;
}
