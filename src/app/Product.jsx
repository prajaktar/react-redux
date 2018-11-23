import React from 'react';
import {render} from 'react-dom';
import List from './List.jsx';
import AddProduct from './AddProduct.jsx';

class Product extends React.Component {
    render() {
        return (
            <div>
                <p>Redux Example</p>
                <AddProduct/>
                <List/>
            </div>
        );
    }
}

export default Product;
