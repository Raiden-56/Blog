import axios from "axios";
import { apiUrl, apiPort } from "../../utils/constnats";

const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const url = `${apiUrl}:${apiPort}/login`;
  try {
    const response = await axios.post(
      url,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    console.log(err);
    return {
      status: err,
      statusText: "",
      data: null,
    };
  }
};

export default Login;
