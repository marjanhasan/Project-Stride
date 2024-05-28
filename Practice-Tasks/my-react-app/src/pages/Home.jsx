import { useLoaderData } from "react-router-dom";
import Products from "../components/products/Products";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Products data={data} />
    </div>
  );
};

export default Home;
