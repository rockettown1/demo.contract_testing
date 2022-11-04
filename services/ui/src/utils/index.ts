export const fetchData = async (url: string, setData: any) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchPeople = async (url: string, setPeople: any) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
