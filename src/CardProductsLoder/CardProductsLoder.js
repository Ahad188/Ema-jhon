import { getShoppingCart } from "../../utilities/fakedb";

const cardproductsLoder= async()=>{

     const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);
     // console.log("ids herer",ids);

     const lodedProducts = await fetch('http://localhost:5000/productsByIds',{
          method: 'POST', 
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(ids)
     });
     const products = await lodedProducts.json();

     console.log('pro by id',products)
      
     // console.log(storeCard)
     const saveCard = [];

     for (const id in storedCart) {
          const addedProduct = products.find(pd => pd._id === id);
          if (addedProduct) {
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              saveCard.push(addedProduct);
          }
      }
     // if you need to seed two thing
     // return [products,saveCard]
     // return {products,saveCard}
     
     return saveCard;
}
export default cardproductsLoder;