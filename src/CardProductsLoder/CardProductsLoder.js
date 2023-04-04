import { getShoppingCart } from "../../utilities/fakedb";

const cardproductsLoder=async()=>{
     const lodedProducts = await fetch('fakeData/products.json');
     const products = await lodedProducts.json();
     // console.log(products)
     const storeCard = getShoppingCart();
     // console.log(storeCard)
     const saveCard = [];

     for(const id in storeCard){
          const addedProducts = products.find(pd=>pd.id === id);
          if(addedProducts){
               const quantity = storeCard[id];
               addedProducts.quantity = quantity;
               saveCard.push(addedProducts)
          }
     }
     // if you need to seed two thing
     // return [products,saveCard]
     // return {products,saveCard}
     
     return saveCard;
}
export default cardproductsLoder;