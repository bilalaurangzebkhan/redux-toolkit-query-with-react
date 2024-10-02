import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApi";

const Home = () => {

  const { data, isLoading, error, isError } = useGetProductsQuery()
  useEffect(() => {
    if (error) alert(error);
  }, [error])

  if(isLoading) return <h1>Loading....</h1>;
  
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center w-100 me-5"
        style={{ height: "100vh" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.products?.map((product) => (
            <tr>
              <th scope="row">{product?._id}</th>
              <td>{product?.name}</td>
              <td>{product?.price}</td>
              <td>{product?.description}</td>
              <td>
                <Link to={`/product/sdfsdf`} className="btn btn-primary">
                  Edit
                </Link>
                <button className="btn btn-danger ms-1">Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
