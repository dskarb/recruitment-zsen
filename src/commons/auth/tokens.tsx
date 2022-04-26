import { COOKIE_AUTH_TOKENS_KEY } from 'commons/constants/auth';

type token = string;

export const getToken = (): token | null => {
  let name = COOKIE_AUTH_TOKENS_KEY + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const saveToken = (token: token) => {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie =
    COOKIE_AUTH_TOKENS_KEY + '=' + token + ';' + expires + ';path=/';
};

export const removeToken = () => {
  document.cookie =
    COOKIE_AUTH_TOKENS_KEY +
    '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
