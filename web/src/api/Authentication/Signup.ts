import axios from 'axios';
import { apiUrl } from '../../utils/constnats';

const Signup = async ({ email, password, username }: { email: string, password: string, username: string }) => {
    const url = apiUrl + '/signup'; 
    try {
        const response = await axios.post(url, {
            email,
            password,
            username,
        }, { withCredentials: true });
        return response;
    } catch (err: any) {
        return {
            status: err,
            statusText: '',
            data: null,
        }
    } 
    
}

export default Signup;