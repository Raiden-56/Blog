import axios from "axios";
import { apiPort, apiUrl } from "../../utils/constnats";

const Login = async () => {
  const url = `${apiUrl}:${apiPort}/login`;
  try {
    const response = await axios.get(url, { withCredentials: true });
    return response;
  } catch (err) {
    return {
      status: err,
      statusText: "",
      data: null,
    };
  }
};

export default Login;
