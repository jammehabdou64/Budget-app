import axios from "axios";

let Api = axios.create({
  baseURL: "http://localhost:7070/api",
});

export default Api;
