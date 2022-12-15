
export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"

const addProductToCart = (product, state) => {
    console.log("adding product", product);
    const updateCart = [...state.cart];
    const updateItemIndex = updateCart.findIndex(
        item => item.id === product.id
    );

    if (updateItemIndex < 0) {
        updateCart.push({ ...product, quantity: 1 })
    } else {
        const updateItem = {
            ...updateCart[updateItemIndex]
        };
        updateItem.quantity++;
        updateCart[updateItemIndex] = updateItem;
    }

    return { ...state, cart: updateCart }
}

const removeProductFromCart = (productId, state) => {
    console.log("remove product", + productId)
    const updateCart = [...state.cart];
    const updateItemIndex = updateCart.findIndex(item => item.id === productId);

    const updateItem = {
        ...updateCart[updateItemIndex]
    };
    updateItem.quantity--;
    if (updateItem.quantity <= 0) {
        updateCart.splice(updateItemIndex, 1);
    } else {
        updateCart[updateItemIndex] = updateItem;
    }

    return { ...state, cart: updateCart };
}

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.product, state);

        case REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state)

        default:
            return state;
    }
};