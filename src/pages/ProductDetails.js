import React from "react";
import { useParams } from "react-router-dom"; // to generate each url of product

export default function ProductDetails() {
  const { id } = useParams();
  return <h1>hello from product details page {id}</h1>;
}
