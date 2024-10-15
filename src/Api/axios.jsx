import axios from "axios";

const axiosInstance = axios.create({
  //Local instance of firebase functions
  //   baseURL: "http://127.0.0.1:5001/clone-58df5/us-central1/api",
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-1-dc1b.onrender.com,
});

export { axiosInstance };
