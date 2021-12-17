import axios from 'axios';
import { apiUrl } from '../../utils/constnats';

const Login = async () => {
    const url = apiUrl + '/login'; 
    try {
        const response = await axios.get(url, { withCredentials: true });
        return response;
    } catch (err) {
        return {
            status: err,
            statusText: '',
            data: null,
        }
    }
}

export default Login;