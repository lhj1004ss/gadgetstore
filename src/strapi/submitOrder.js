// submit order
import axios from "axios";
import url from "../utils/URL";

async function submitOrder({ name, total, item, stripeTokenId, userToken }) {
  const response = await axios
    .post(
      `${url}/orders`, //orders is content type name in strapi
      {
        name, //these are from strapi field names( name, total, item)c
        total,
        item,
        stripeTokenId,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
}
export default submitOrder;
