/**
 * Created by gopi on 1/8/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';



window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
