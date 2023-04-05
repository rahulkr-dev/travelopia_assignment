import axios from "axios"
const baseUrl = "http://localhost:8080"
const useFetchData = async(url) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [data,setData] = useState(null);

    const fetchTravelData = async()=>{
        let res = await axios.get(`${baseUrl}${url}`);
        res = await res.json();
        return res.data;
    };

    // Error handling
    try{
        setLoading(true);
        let res = await fetchTravelData();
        setData(res)
        setLoading(false)
    }catch(err){
        setLoading(false);
        setError(err.message)
    };
    return {loading,error,data}
}

export default useFetchData