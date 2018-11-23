import addProduct from './action.js';

const productList = { product_list: [{ "id": 1, "name": "Mobile", "price": 20000},
{ "id": 2, "name": "Camera", "price": 40000}] }

const rootReducer = (state=productList, action) => {
    console.log(action.type);
    switch(action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                product_list: [
                    ...state.product_list, { name: action.name, id: action.id, price: action.price }
                ]
            }
        default:
            return state;    
    }
}

export default rootReducer;

