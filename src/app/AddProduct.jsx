import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {addProduct} from './action.js';

class AddProduct extends React.Component {
    render() {
        return(<div>
            <input type="textbox" id="product_name"/>
            <input type="textbox" id="product_price"/>
            <button type="button" onClick={() => this.props.addToProductList(document.getElementById("product_name").value, document.getElementById("product_price").value)}>Add to List </button>
        </div>)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToProductList: (name, price) => dispatch(addProduct(name, price))
});

export default connect(null, mapDispatchToProps)(AddProduct);