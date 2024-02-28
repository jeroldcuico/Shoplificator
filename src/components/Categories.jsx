import Product from "./Product";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";


export default function Categories() {
  const { data, loading } = useAxios(
    "https://dummyjson.com/products/categories"
  );
  if (loading) return <h1>Loading....</h1>;
  if (!data) return;
  return (
    <>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-x-14 mt-10 mb-5"
      >
        {data.map((category, index) => (
          <div
            key={index}
            className="relative m-10 flex w-full max-w-xs flex-col duration-500 hover:scale-105 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <input type="hidden" />
            <div className="bg-slate-200">
              <Link to={`/Shoplificator/products/category/${category}`} className="h-40 flex justify-center items-center">
                <h5 className="text-xl tracking-tight text-slate-900 capitalize">
                  {category.replace('-', ' ')}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
