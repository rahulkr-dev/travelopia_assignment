import axios from "axios"
// const BASE_URL = "http://localhost:8080"
const BASE_URL = "https://travelopia-654e.onrender.com"

// POST REQUEST
export const postTravelData = async(url,data)=>{
    try{
        let res = axios.post(`${BASE_URL}${url}`,data);
        return "Sucess"
    }catch(err){
        console.log({
            msg:"Post request Error",
            error:err
        })
    }
}

// GET TRAVEL DATA
export const fetchDataFromApi = async(url)=>{
    try {
        const { data } = await axios.get(BASE_URL + url);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}