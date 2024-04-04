import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItem : [],
    cartQuantity:0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
           const itemIndex =  state.cartItem.findIndex((item)=> item.id === action.payload.id)
           if (itemIndex >= 0) {
            state.cartItem[itemIndex].cartQuantity += 1;
          } else {
            state.cartItem.push({ ...action.payload, cartQuantity: 1 });
          }

        },
        removeFromCart(state, action) {
            const index = state.cartItem.findIndex(item => item.id === action.payload)
            if (index !== -1) {
              state.cartItem.splice(index, 1)
            }
          },
          increaseQuantity(state, action) {
            const product = state.cartItem.find((item) => item.id === action.payload)
            if (product) {
              if (product.cartQuantity < 3) {
                product.cartQuantity++;
              }
            }
        },
        decreaseQuantity(state, action) {
          const id = action.payload;
          const product = state.cartItem.find((item) => item.id === id);
          if (product && product.cartQuantity > 1) {
              product.cartQuantity--
          }
      },
          emptyCart(state) {
            state.cartItem = [];
          },
    }
})

export const { addToCart,removeFromCart,increaseQuantity ,decreaseQuantity,emptyCart}= cartSlice.actions
export default cartSlice.reducer