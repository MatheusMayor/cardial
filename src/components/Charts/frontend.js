import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Cypress",
    uv: 4000,
    pv: 9000,
    amt: 2400,
  },
  {
    name: "Puppeteer",
    uv: 4000,
    pv: 9000,
    amt: 2400,
  },
  {
    name: "Selenium",
    uv: 3000,
    pv: 7000,
    amt: 2210,
  },
  {
    name: "Robots F.",
    uv: 2000,
    pv: 6000,
    amt: 2290,
  },
  {
    name: "JUnit",
    uv: 2000,
    pv: 7000,
    amt: 2290,
  },
  {
    name: "SQL",
    uv: 3000,
    pv: 6500,
    amt: 2210,
  },
];

export default function Backend() {
  return (
    <ResponsiveContainer width="90%" height="80%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="pv" fill="#E50041" />
        <XAxis dataKey="name" />
      </BarChart>
    </ResponsiveContainer>
  );
}
