export const parseJwt = <T>(token: string): T | null => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (eror) {
    return null;
  }
};
