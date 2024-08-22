//eff27aed81b7a63e400492739c81f462

//https://api.themoviedb.org/3/movie/550?api_key=eff27aed81b7a63e400492739c81f462

//Base da URL: https://api.themoviedb.org/3/

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api
