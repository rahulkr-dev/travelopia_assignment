import axios from "axios"
const baseUrl = "http://localhost:8080"

const usePostData = async(url,dataObj) => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [sucess,setSucess] = useState(false);

    const fetchTravelData = async()=>{
        let res = await axios.get(`${baseUrl}${url}`,dataObj);
        res = await res.json();
        return res.data;
    };

    // Error handling
    try{
        setLoading(true);
        let res = await fetchTravelData();
        setData(true)
        setLoading(false)
    }catch(err){
        setLoading(false);
        setError(err.message)
    };
    return {loading,error,data}
}

export default usePostData