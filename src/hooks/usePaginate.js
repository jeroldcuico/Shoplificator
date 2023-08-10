import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxios";

function usePaginate(url, pageNumber = 1, limit = 10) {
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [total, setTotal] = useState(0);
    const skip = (currentPage - 1) * limit;
    const { data, loading } = useAxios(`${url}?limit=${limit}&skip=${skip}`);

    useEffect(() => {
        if (data?.total) setTotal(data.total);
    }, [data])

    const nextPage = () => {
        if (currentPage < total) setCurrentPage(currPage => currPage + 1);
    }
    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currPage => currPage - 1);
    }

    return {
        data,
        nextPage,
        previousPage,
        currentPage,
        loading,
        total
    }
}

export default usePaginate;
