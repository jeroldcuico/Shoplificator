import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories";
import ProductCategories from "./components/ProductCategories";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/Shoplificator/",
    element: <Layout />,
    children: [
      {
        path: "/Shoplificator/",
        element: <Home />,
      },
      {
        path: "/Shoplificator/products/:id",
        element: <Products />,
      },
      {
        path: "/Shoplificator/product/:id",
        element: <Product />,
      },
      {
        path: "/Shoplificator/category",
        element: <Categories />,
      },
      {
        path: "/Shoplificator/products/category/:name",
        element: <ProductCategories />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
