import axios, { AxiosResponse } from "axios";

export const externalServiceExample = {
  get: async (url: string): Promise<{ message: string }> => {
    const response = await axios.get(url);
    return response.data;
  },
};
