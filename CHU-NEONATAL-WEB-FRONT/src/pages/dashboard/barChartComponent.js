import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {Grid} from "@mui/material";

const BarChartComponent = ({ data, xDataKey, barDataKeys }) => {
    return (
        <div>
            <Grid sx={{  marginTop: '20px' }}>
        <BarChart width={600} height={450} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xDataKey} label={{ value: 'Ips' ,offset: -20 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            {barDataKeys.map((barDataKey, index) => (
                <Bar
                    key={barDataKey}
                    dataKey={barDataKey}
                    fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                />
            ))}
        </BarChart>
        </Grid>
        </div>
    );
};

export default BarChartComponent;
