import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "";
import axios from "axios";

const ShopSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product._id}
                  >
                    <div className="border-product">
                      <Link to={`path${product.id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </Link>
                      <div className="shoptext">
                        <p>
                          <Link to={`/*path*/${product.id}`}>
                            {product.name}
                          </Link>
                        </p>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                        <h3>Ksh{product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
