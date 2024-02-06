const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42057283-adafa6fc2ce046555d94b0faa';

async function giveApiKey(q, page = 1){
    try{
        let data = await axios.get(`${BASE_URL}`,{
            params: {
                key: API_KEY,
                q: q,
                per_page: 15,
                lang: "en",
                page,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            }
        })
        const resp = await data.data
        return resp
    } catch(err) {
        console.log(err)
    }
}

export {giveApiKey}