import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center">
        {
          // eslint-disable-next-line react/prop-types
          data?.map((shoe) => (
            <SingleProduct key={shoe?._id} shoe={shoe} />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
