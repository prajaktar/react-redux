import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducer.js'
import Product from './Product.jsx';

const store = createStore(rootReducer);

render(
    <Provider store={store}> 
        <Product/>
    </Provider>,
    document.getElementById('app')
)
