import { useParams } from 'react-router-dom';

const Redirect = () => {

    const params = useParams();
    const url: string = String(params['*']);
    console.log(url);
    
    window.location.href = url;
    
    return null;
}

export default Redirect;