import React, { Component } from "react";
import Chart from "react-apexcharts";

class HeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        series: [
            {
              name: "January",
              data: [{
                x: 'Ooty',
                y: 16
              }, {
                x: 'Cbe',
                y: 26
              }, {
                x: 'Bandipur',
                y: 13
              }, {
                x: 'Chennai',
                y: 32
              }]
            },
            {
              name: "May",
              data: [{
                x: 'Ooty',
                y: 25
              }, {
                x: 'Cbe',
                y: 30
              }, {
                x: 'Bandipur',
                y: 25
              }, {
                x: 'Chennai',
                y: 36
              }]
            }
          ],
          plotOptions: {
            heatmap: {
              colorScale: {
                ranges: [{
                    from: 0,
                    to: 24,
                    color: '#128FD9'
                  },
                  {
                    from: 25,
                    to: 29,
                    color: '#FFB200'
                  },
                  {
                    from: 30,
                    to: 45,
                    color: '#FF0020'
                  }
                ]
              }
            }
          }
        }
    }
  }

  render() {
    return (
            <div>
            <h5> Heat map, Temperature - using ApexCharts</h5>
            <Chart
              options={this.state.options}
              series={this.state.options.series}
              type="heatmap"
              width="550"
              height="220"
            />
          </div>
    );
  }
}

export default HeatMap;