import useSWR from "swr";
import { WorkSpaceSummaryData } from "../../ApiService/Api";

const fetcher = async () => {
    const response = await WorkSpaceSummaryData();
    return response.data;
  };
  
  export const useSummary = () => {
    const { data, error, isLoading } = useSWR('summary', fetcher);
    return {
      summary: data,
      isLoading,
      error,
    };
  };