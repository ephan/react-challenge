export const request = (url: string) => {
  // get user token from cookie
  const token = localStorage.getItem('token');
  // add token to request headers
  const headers = new Headers();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return fetch(url, { headers });
};
