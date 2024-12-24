const createTokenManager = () => {
  let token: string | null = null;

  const setToken = (newToken: string): void => {
    token = newToken;
  };

  const getToken = (): string | null => {
    return token;
  };

  const clearToken = (): void => {
    token = null;
  };

  return {
    setToken,
    getToken,
    clearToken,
  };
};

const tokenManager = createTokenManager();

export default tokenManager;
