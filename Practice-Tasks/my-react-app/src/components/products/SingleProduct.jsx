/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProduct = ({ shoe }) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, brand, price, description, image_url } = shoe;
  return (
    <div className="card w-72 xl:w-80 2xl:w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-base">
          {" "}
          <span className="font-bold">Name : </span> {title}
        </h2>
        <h2 className="text-base">
          {" "}
          <span className="font-bold">Brand : </span> {brand}
        </h2>
        <p className="text-base">
          <span className="font-bold">Details : </span>
          {description.slice(0, 80)}...
        </p>
        <h2 className="text-lg font-bold">Price : {price} $$</h2>
        <div className="w-full mt-2">
          <button className="btn btn-primary w-full">
            <Link to={`/products/${id}`}>View details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
