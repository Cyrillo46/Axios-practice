import { useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-store-products";

export const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("First Request");
  }, []);

  return;
};
