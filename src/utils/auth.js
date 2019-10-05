const JWT_TOKEN_NAME = 'jwtToken';

export const setToken = token => localStorage.setItem(JWT_TOKEN_NAME, token);

export const removeToken = () => localStorage.removeItem(JWT_TOKEN_NAME);

export const isLoggedIn = () => !!localStorage.getItem(JWT_TOKEN_NAME);
