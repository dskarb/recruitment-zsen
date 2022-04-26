import axios from 'axios';
import { getToken } from 'commons/auth/tokens';
import { PropsWithChildren } from 'react';
import { API_URL } from 'commons/constants/env';

const AuthWrapper = ({ children }: PropsWithChildren<{}>) => {
  axios.defaults.baseURL = API_URL;
  axios.interceptors.request.use(
    function (config) {
      const token = getToken();
      if (config.headers) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return <>{children}</>;
};

export default AuthWrapper;
