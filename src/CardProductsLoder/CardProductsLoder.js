const cardproductsLoder=async()=>{
     const lodedProducts = await fetch('fakeData/products.json');
     const products = await lodedProducts.json();
     // console.log(products)
     return products;
}
export default cardproductsLoder;