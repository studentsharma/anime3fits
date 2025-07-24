import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    imageUrl: string;
}

// const initialState: Product[] = [{
//     id: 0,
//     name: '',
//     originalPrice: 0,
//     discountedPrice: 0,
//     imageUrl: ''
// }]

const initialState: Product[] = [];


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add_product: (state, action: PayloadAction<Product>) => {
            // const pro = {
            //     id: action.payload,
            //     name: action.payload,
            //     originalPrice: action.payload,
            //     discountedPrice: action.payload,
            //     imageUrl: action.payload
            // }

            state.push(action.payload);
        },
        set_products: (state, action: PayloadAction<Product[]>) => {
            return action.payload;
        },
    }

})

export const { set_products } = productSlice.actions;
export default productSlice.reducer;