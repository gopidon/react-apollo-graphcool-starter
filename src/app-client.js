/**
 * Created by gopi on 1/8/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import "jquery";
import "bootstrap";
require('../node_modules/fixed-data-table/dist/fixed-data-table.min.css');
require('./static/css/quill.base.css');
require('./static/css/quill.snow.css');
require('../node_modules/react-datepicker/dist/react-datepicker.min.css');
require('./static/css/style.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');



window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
