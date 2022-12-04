import axios, { AxiosResponse, AxiosError } from 'axios';
import CookieToken from '@vo/cookieTokenVo';

const DEFAULT_CONFIG = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(DEFAULT_CONFIG);
const bearerInstance = axios.create(DEFAULT_CONFIG);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => error.response
);

bearerInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => error.response
);

const getAxios = ({ bearer }: { bearer: boolean }) => {
  if (!bearer) return instance;

  bearerInstance.defaults.headers.common.Authorization = `Bearer ${CookieToken.get()}`;
  return bearerInstance;
};

export default getAxios;
