import axios from 'axios';
import { apiUrl } from '../../utils/constnats';

const Login = async ({ email, password }: { email: string, password: string }) => {
    const url = apiUrl + '/login'; 
    try {
        const response = await axios.post(url, {
            email,
            password
        });
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