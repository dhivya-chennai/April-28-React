import React, { Component } from 'react';
import BasicTable from './basicTable';

class TablePage extends Component {
    render() {
        return (
            <div className='non-carousel-pages'>
                <h5>Sortable table columns</h5>
                <br/>
                <BasicTable/>
            </div>
        );
    }
}

export default TablePage;