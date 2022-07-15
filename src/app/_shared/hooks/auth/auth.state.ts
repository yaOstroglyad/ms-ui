export interface AuthState {
  user: Record<string, unknown>;
  token: string;
  isLogged: boolean;
}
