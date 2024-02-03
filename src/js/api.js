const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42057283-adafa6fc2ce046555d94b0faa';

function giveApiKey(q){
    return axios.get(`${BASE_URL}`,{
        params: {
            key: API_KEY,
            q: q,
            per_page: 6,
            lang: "en",
            page: 1,
        }
    }).then(({data}) => data)
}

export {giveApiKey}