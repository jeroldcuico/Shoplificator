import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await axios.get(url);
            setData(result.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [url])

    return {
        data, loading
    }
}

export default useAxios;