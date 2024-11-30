import { useEffect, useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://meteomonitoring.ru:8080/linear", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex justify-evenly px-5">
      <ResponsiveContainer width="50%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="max_probability" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="max_probability" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
