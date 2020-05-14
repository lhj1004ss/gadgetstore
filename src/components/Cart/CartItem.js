import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CartContext } from "../../context/cart";

export default function CartItem({ id, image, title, price, amount }) {
  return (
    <article className="cart-item">
      <img src={image} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => {
            console.log("item removed");
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            console.log("increase");
          }}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => {
            console.log("decrease");
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
