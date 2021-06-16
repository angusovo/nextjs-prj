
export const initialState = []

export const actionType = {
    SET_PRODUCT: "SET_PRODUCT",
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    DECRE_ITEM: "DECRE_ITEM",
}

const reducer = (state, action) => {

    switch (action.type) {
        case actionType.ADD_ITEM:
            return state.find((item) => item.name === action.product.name)
                ? state.map((item) =>
                    item.name === action.product.name
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                )
                : [...state, { ...action.product, quantity: 1 }];
        case actionType.REMOVE_ITEM:
            return state.filter((item) => item.name !== action.product.name);
        case actionType.DECRE_ITEM:
            return state.find((item) => item.name === action.product.name)?.quantity ===1
                ? state.filter((item) => item.name !== action.product.name)
                : state.map((item) =>
                    item.name === action.product.name
                        ? {
                            ...item,
                            quantity: item.quantity - 1
                        }
                        : item
                );

        default:
            return state
    }
}

export default reducer            

// return {                
//                 ...state, 
//                 cart: [ ...state.cart, action.product],
//             }