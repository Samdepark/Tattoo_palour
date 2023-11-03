import React from "react";
import axios from "axios";

const singleProduct = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchproduct();
  }, [match]);
  return (
    <>
      <div className="constainer single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-img">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
module.exports = singleProduct;
