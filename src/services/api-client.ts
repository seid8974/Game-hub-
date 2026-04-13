import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5b4616ffc3a469582ceab0efc342e32",
  },
});
