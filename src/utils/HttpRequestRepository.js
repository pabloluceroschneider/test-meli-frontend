import axios from './axios';

class HttpRequestRepository{
    static fetchData(endpoint, params, token){
        return new Promise( async (res, rej) => {
            try {
                let {data} = await axios.get(endpoint, {params});
                res(data);
            } catch (error) {
                rej(error);
            }
        })
    }
}
export default HttpRequestRepository;