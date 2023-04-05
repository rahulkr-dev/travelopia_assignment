import axios from "axios"
const baseUrl = "http://localhost:8080"

// POST REQUEST
export const postTravelData = async(data)=>{
    try{
        axios.post(`${baseUrl}/api/travel-form`,data)
    }catch(err){
        console.log({
            msg:"Post request Error",
            error:err
        })
    }
}

// GET TRAVEL DATA
export const fetchTravelData = async(data)=>{
    try {
        let res = await axios.get(`${baseUrl}/api/travel-form`);
        res = await res.json();
        return res.data;
    } catch (error) {
        console.log({
            msg:"GET request Error",
            error:err
        })
    }
}