export type AuthResponse = {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
};

export type AuthLogin = {
  email: string;
  password: string;
};
