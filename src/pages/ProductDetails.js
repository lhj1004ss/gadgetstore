import React from "react";
import { useParams } from "react-router-dom"; // to generate each url of product
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-image"></img>
        <article>
          <h1>{title}</h1>
          <h2>${price}</h2>
          <h3>{description}</h3>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              addToCart(product);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
