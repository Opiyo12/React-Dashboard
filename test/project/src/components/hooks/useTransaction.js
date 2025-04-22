import useSWR from 'swr';
import { WorkSpaceTransaction } from '../../ApiService/Api';

const fetcher = async () => {
  const response = await WorkSpaceTransaction();
  return response.data;
};

export const useTransaction = () => {
  const { data, error, isLoading } = useSWR('transactions', fetcher);
  return {
    transactions: data,
    isLoading,
    error,
  };
};