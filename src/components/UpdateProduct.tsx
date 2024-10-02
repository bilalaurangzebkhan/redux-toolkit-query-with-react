import React, { useEffect, useState } from "react";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../redux/api/productApi";
import { useParams } from "react-router-dom";

const UpdateProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const params = useParams()

  const { data } = useGetProductByIdQuery(params?.id || "");

  const [ updateProduct, { isLoading, error, isSuccess } ] = useUpdateProductMutation()
  
  useEffect(() => {

    if(data) {
      setName(data.product.name)
      setPrice(data.product.price)
      setDescription(data.product.description)
    }
    if (error) alert(error);

    if (isSuccess) {
      alert("Product updated successfully");
    }
  }, [error, isSuccess])



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProduct({ id: data?.product?._id!, name, price, description })
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Update Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
