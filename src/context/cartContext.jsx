import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [cartNumber, setCartNumber] = useState(0)

    const addItem = (producto) => {

        if (cartList.find(prod => prod.id === producto.id)) {
            cartList.find(prod => prod.id === producto.id).quantity += producto.quantity
            getCartItemNumber()
        } else {
            setCartList([...cartList, producto])
        }
    }

    const removeItem = (itemId) => {
        setCartList(cartList.filter(prod => prod.id !== itemId))
    }

    const clear = () => {
        setCartList([])
    }

    const isInCart = (itemId) => {
        return cartList.includes(itemId)
    }

    const getCartTotal = () => {

        let total = 0

        cartList.forEach(prod => total += prod.price * prod.quantity)

        return total
    }

    const getCartItemNumber = () => {

        let total = 0

        cartList.forEach(prod => total += prod.quantity)

        setCartNumber(total)


    }

    return (
        <CartContext.Provider value={{
            cartList,
            cartNumber,
            addItem,
            removeItem,
            clear,
            isInCart,
            getCartTotal,
            getCartItemNumber
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
