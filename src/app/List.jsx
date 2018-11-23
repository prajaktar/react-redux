import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        var product_list = this.props.product_list.map(function(list){
            return <li key={list.id}>{list.id} {list.name} {list.price}</li>
        });
        return <ul>{product_list}</ul>
    }
}

const mapStateToProps = state => ({
    product_list: state.product_list
})


export default connect(mapStateToProps)(List);