import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../apiRequests/api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [initialLoading,setInitialLoading] = useState(true);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
                setInitialLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
                setInitialLoading(false)
            });
    }, [url]);

    return { data, loading, error,initialLoading };
};

export default useFetch;