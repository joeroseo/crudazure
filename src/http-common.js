import axios from "axios";

export default axios.create({
  baseURL: "https://nodejoe5.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});
