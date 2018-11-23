let nextProductId = 3
export const addProduct = (name, price) => {
    return {
        type: 'ADD_PRODUCT',
        id: nextProductId++,
        price,
        name
    }
}