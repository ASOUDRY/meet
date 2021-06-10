// import React, {useEffect, useState} from 'react'
import React from 'react'

import { PieChart, Pie, ResponsiveContainer } from 'recharts';


const EventGenre = ({events}) => {    
    console.log({events})
    // const data = [
    //     {
    //       "name": "Group A",
    //       "value": 400
    //     },
    //     {
    //       "name": "Group B",
    //       "value": 300
    //     },
    //     {
    //       "name": "Group C",
    //       "value": 300
    //     },
    //     {
    //       "name": "Group D",
    //       "value": 200
    //     },
    //     {
    //       "name": "Group E",
    //       "value": 200
    //     }
    //   ];

      // const [data, setData] = useState([]);

      
      const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
          const value = events.filter(({ summary }) => 
          summary.split(' ').includes(genre)).length;
          return { name: genre, value};
        });
      return data;
      }

      // useEffect(() => {
      //   setData(() => getData());
      // }, [events]);
    

    return (
      <ResponsiveContainer height={400}>
        <PieChart height={400}>
          <Pie 
          // data={data}
          data={getData()}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill='#790c5a'
          dataKey='value'
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}

export default EventGenre;