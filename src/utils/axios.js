import axios from 'axios';

const url = {
    local: "http://localhost:5000/api/v1",
}

export default axios.create({
    baseURL: url.local,
    headers:{
        'Content-Type':'application/json'
    }
})

