import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://tecprime.com.br/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

export const tecprime = {
  getCategoryById: async ({ category }) => {
    api.post("/products", { category }).then(res => {
      const { data } = res;
      console.log(data);
      return data;
    });
  }
};
