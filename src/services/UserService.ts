import axios from '@utils/getAxios';
import { User } from 'src/types/user';
import getQueryString from '@utils/getQueryString';

const UserService = {
  usersQueryOptions: {
    staleTime: 3 * 60 * 1000,
    keepPreviousData: true,
  },

  usersQueryConverter(key: string) {
    switch (key) {
      case 'page':
        return '_page';
      case 'limit':
        return '_limit';
      case 'isActive':
        return 'is_active';
      case 'isStaff':
        return 'is_staff';
      case 'search':
        return 'q';
      default:
        return key;
    }
  },

  async getUsers(params: Record<string, unknown>) {
    const { data, headers } = await axios({ bearer: true }).get<User[]>(
      `/users?${getQueryString(params, this.usersQueryConverter)}`
    );
    return { data, totalLength: Number(headers?.['x-total-count'] ?? 0) };
  },

  async getUserById({ id }: { id: number }) {
    const res = await axios({ bearer: true }).get<User[]>(`/users?id=${id}`);
    return res.data[0];
  },

  async patchUser(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<User>(`/users/${id}`, data);
    return res.data;
  },

  async deleteUser(id: string) {
    const res = await axios({ bearer: true }).delete(`/users/${id}`);
    return res.data;
  },
};

export default UserService;
