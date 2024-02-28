import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios"
import Product from "./Product";

export default function () {
    const { name } = useParams()
    const { data, loading } = useAxios(
        `https://dummyjson.com/products/category/${name}`
    );
    if (loading) return <h1>Loading....</h1>;
    if (!data) return;
    return (
        <>
            <section id="Products" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {data.products?.map((product, index) =>
                    <Product key={index} product={product} />
                )}
            </section>
        </>
    )
}
