import axios from '@utils/getAxios';
import { Account } from 'src/types/account';
import getQueryString from '@utils/getQueryString';

const AccountsService = {
  accountsQueryOptions: {
    staleTime: 3 * 60 * 1000,
    keepPreviousData: true,
  },

  accountsQueryConverter(key: string) {
    switch (key) {
      case 'page':
        return '_page';
      case 'limit':
        return '_limit';
      case 'brokerId':
        return 'broker_id';
      case 'isActive':
        return 'is_active';
      case 'search':
        return 'q';
      default:
        return key;
    }
  },

  async getAccounts(params: Record<string, unknown>) {
    const { data, headers } = await axios({ bearer: true }).get<Account[]>(
      `/accounts?${getQueryString(params, this.accountsQueryConverter)}`
    );
    return { data, totalLength: Number(headers?.['x-total-count'] ?? 0) };
  },

  async patchAccount(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<Account>(`/accounts/${id}`, data);
    return res.data;
  },
};

export default AccountsService;
