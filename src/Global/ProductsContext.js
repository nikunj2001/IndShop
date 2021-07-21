import React,{createContext,useState} from 'react';
import dslr from '../assets/dslr.jpg';
import headphones from '../assets/headphones.jpg'
import iphone from '../assets/iphone.jpg'
import blueYetti from '../assets/microphone.jpg'
import perfume from '../assets/perfume.jpg'
import rings from '../assets/rings.jpg'
import shoes from '../assets/shoes.jpg'
import watch from '../assets/watch.jpg'
export const ProductsContext = createContext();
const ProductContextProvider = (props) => {

    const [products] = useState( [
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfume,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: blueYetti,productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
      ])
      
    return(
        <ProductsContext.Provider value={{products}}>
           {props.children}
        </ProductsContext.Provider>
    )

}

export default ProductContextProvider;