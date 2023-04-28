import React from 'react';
import {
   AreaChart,
   Area,
   YAxis,
   XAxis,
   CartesianGrid,
   Tooltip,
   Legend
   } from "recharts";
   class AreaRechartComponent extends React.Component {
      data = [
         {
            name: "Chennai",
            "Sale A": 3432,
            "Sale B": 2342
         },
         {
            name: "Mumbai",
            "Sale A": 2342,
            "Sale B": 7746
         },
         {
            name: "Delhi",
            "Sale A": 4565,
            "Sale B": 2556
         },
         {
            name: "Kolkata",
            "Sale A": 6654,
            "Sale B": 4465
         }
      ];
      render() {
         return (
            <div>
            <h5> Area Chart using Recharts</h5>
            <AreaChart
               width={730}
               height={300}
               data={this.data}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
               </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="6 3" />
            <Tooltip />
            <Legend />
            <Area
               type="monotone"
               dataKey="Sale A"
               stroke="maroon"
               fillOpacity={1}
               fill="url(#colorUv)"/>
            <Area
               type="monotone"
               dataKey="Sale B"
               stroke="orange"
               fillOpacity={0}
               fill=""/>
            </AreaChart>
            </div>
      );
   }
}
export default AreaRechartComponent;