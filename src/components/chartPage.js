import React, { Component } from 'react';
import AreaRechartComponent from './areaChart';
import HeatMap from './heatMap';

class ChartPage extends Component {
    
    render() {
        return (
            <div d-flex-column className='non-carousel-pages'>
                <AreaRechartComponent/>
                <HeatMap/>
            </div>
        );
    }
  }
export default ChartPage;
