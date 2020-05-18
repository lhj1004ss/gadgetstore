import url from "./URL";
// flatten function
export function flattenProducts(data) {
  return data.map((item) => {
    // console.log(item);
    // let image = item.image.url;
    let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}
// helper function
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
