import axios from 'axios';
import { apiUrl } from '../../utils/constnats';

const getOne = async ({ roleId }: { roleId: number }) => {
    const url = apiUrl + '/roles/' + roleId; 
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

export default getOne;