import Product from "./Product";
import useAxios from "../hooks/useAxios";

export default function Categories() {
  const { data, loading } = useAxios(
    "https://dummyjson.com/products/categories"
  );
  if (loading) return <h1>Loading....</h1>;
  if (!data) return;
  console.log(data);
  return (
    <>
      <section
        id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {data.map((category, index) => (
          <div
            key={index}
            className="relative m-10 flex w-full max-w-xs flex-col duration-500 hover:scale-105 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <input type="hidden" />
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {category}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
