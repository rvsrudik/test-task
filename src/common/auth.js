export function login() {
  localStorage.setItem('token', true);
}

export function logout() {
  localStorage.removeItem('token');
}
