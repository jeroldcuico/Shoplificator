import Product from "./Product";
import usePaginate from "../hooks/usePaginate";
import Pagination from "./Pagination";

export default function ProductCard() {

  const { data, nextPage, previousPage, currentPage, loading, total } = usePaginate("https://dummyjson.com/products/")
  if (loading) return <h1>Loading....</h1>
  return (
    <>
      <section id="Products" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.products?.map((product, index) =>
          <Product key={index} product={product} />
        )}
      </section>
      <Pagination {...{ nextPage, previousPage, currentPage, total }} />
    </>
  );
}
