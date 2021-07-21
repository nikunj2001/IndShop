import React,{useContext} from 'react'
import {CartContext} from '../Global/CartContext'
import Products from './Products'
const Cart = () => {
    const {shoppingCart,dispatch,totalPrice,qty} = useContext(CartContext)
    return (
        <div className='container'>
                <div className="cart-details" style={{marginTop:'100px'}}>
                {shoppingCart.length>0?
                    shoppingCart.map(cart=>(
                            <div className="cart" key={cart.id}>
                                    <span className="cart-image">
                                        <img src={cart.image} alt="Not found" />
                                    </span>
                                    <span className="cart-product-name">{cart.name}</span>
                                    <span className="cart-product-price">${cart.price}.00</span>
                                    <span className='inc' onClick={()=>dispatch({type:"INC",id:cart.id,cart})}><i className='fas fa-plus'></i></span>
                                    <span className='product-quantity'>{cart.qty}</span>
                                    <span className='dec' onClick={()=>dispatch({type:"DEC",id:cart.id,cart})}><i className='fas fa-minus'></i></span>
                                    <span className="product-total-price">${cart.price*cart.qty}.00</span>
                                    <span className="delete-product" onClick={()=>dispatch({type:"DEL",id:cart.id,cart})}><i className="fas fa-trash-alt"></i></span>
                            </div>
                    ))
                :"Sorry your cart is currently empty"}
                </div>
        </div>
    )
}

export default Cart
