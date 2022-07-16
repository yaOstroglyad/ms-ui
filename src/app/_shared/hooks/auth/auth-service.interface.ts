export interface AuthService {
  login: (userName: string, password: string) => Promise<Record<string, unknown>>;
  logout: () => Promise<void>;
}
