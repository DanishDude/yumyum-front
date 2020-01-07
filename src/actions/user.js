export const login = (user) => ({
  type: 'LOGIN',
  user,
});

export const signup = (user) => ({
  type: 'SIGNUP',
  user,
});
