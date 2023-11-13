import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Express',
    uv: 4000,
    pv: 5000,
    amt: 2400,
  },
  {
    name: 'Spring Boot',
    uv: 3000,
    pv: 5000,
    amt: 2210,
  },
  {
    name: 'React JS',
    uv: 4000,
    pv: 11000,
    amt: 2400,
  },
  {
    name: 'Next JS',
    uv: 3000,
    pv: 6000,
    amt: 2210,
  },
  {
    name: 'JSF',
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
  {
    name: 'React Native',
    uv: 3000,
    pv: 8000,
    amt: 2210,
  },
  {
    name: 'Flutter',
    uv: 3000,
    pv: 3500,
    amt: 2210,
  },
 
 
  
 
  
];

export default function Backend(){
    return (
      <ResponsiveContainer width="90%" height="80%">
        <BarChart width={10} height={10} data={data}>
          <Bar dataKey="pv"   fill="#E50041"/>
          <XAxis dataKey="name" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

