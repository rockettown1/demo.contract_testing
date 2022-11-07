import axios from "axios";

export const fetchData = async (url: string, setData: any) => {
  try {
    const response = await axios.get(url);

    setData(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchPeople = async (url: string, setPeople: any) => {
  try {
    const response = await axios.get(url);
    setPeople(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
