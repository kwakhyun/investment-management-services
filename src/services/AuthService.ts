import { AxiosResponse } from 'axios';
import axios from '@utils/getAxios';
import { AuthResponse, AuthLogin } from 'src/types/auth';

const AuthService = {
  async signin({ email, password }: AuthLogin) {
    const res = await axios({ bearer: false }).post<AuthResponse, AxiosResponse<AuthResponse>, AuthLogin>('/login', {
      email,
      password,
    });
    return res.data;
  },
};

export default AuthService;
