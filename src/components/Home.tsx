import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApi";

const Home = () => {

  const { data, isLoading, error, isError } = useGetProductsQuery()
  
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
            <tr>
              <th scope="row">asdasdasd</th>
              <td>Laptop</td>
              <td>Laptop</td>
              <td>$23</td>
              <td>
                <Link to={`/product/sdfsdf`} className="btn btn-primary">
                  Edit
                </Link>
                <button className="btn btn-danger ms-1">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
