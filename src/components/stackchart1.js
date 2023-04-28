import React, { Component } from "react";
import Chart from "react-apexcharts";
import '../styles/stackchart.css'

class StackChart1 extends Component {
  constructor(props) {
    super(props);

    /*this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };*/
    this.state = {
      options: {
        series: [{
        name: 'English',
        data: [44, 55, 41, 37, 22]
      }, {
        name: 'Tamil',
        data: [53, 32, 33, 52, 13]
      }, {
        name: 'French',
        data: [12, 17, 11, 9, 15]
      }, {
        name: 'Sanskrit',
        data: [9, 7, 5, 8, 6]
      }, {
        name: 'Hindi',
        data: [25, 12, 19, 32, 25]
      }],
        chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Language widely spoken - using ApexCharts'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K people"
          }
        }
      },
      fill: {
        opacity:1
      
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
      }
    }
  }

  render() {
    return (
            <div>
            <Chart
              options={this.state.options}
              series={this.state.options.series}
              type="bar"
              width="800"
            />
          </div>
    );
  }
}

export default StackChart1;