export default function auth() {
  const authToken = localStorage.getItem('token');

  if (!authToken) {
    throw { name: 'Login' }; // eslint-disable-line
  }
}
