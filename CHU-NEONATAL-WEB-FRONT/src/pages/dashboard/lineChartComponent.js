import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const LineChartComponent = ({ data }) => {
    const [xAxisAttribute, setXAxisAttribute] = useState('age');
    const [yAxisAttribute, setYAxisAttribute] = useState('fcEtatGeneral');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dateOptions, setDateOptions] = useState([]);

    useEffect(() => {
        // Collecter toutes les dates disponibles
        const allDates = [...new Set(data.map(item => new Date(item.dateDadmission).toISOString().split('T')[0]))];
        setDateOptions(allDates);
    }, [data]);

    const handleXAxisChange = (event) => {
        setXAxisAttribute(event.target.value);
    };

    const handleYAxisChange = (event) => {
        setYAxisAttribute(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const filterDataByDate = () => {
        if (startDate && endDate) {
            return data.filter(item => new Date(item.dateDadmission) >= new Date(startDate) && new Date(item.dateDadmission) <= new Date(endDate));
        } else if (startDate) {
            return data.filter(item => new Date(item.dateDadmission) >= new Date(startDate));
        } else if (endDate) {
            return data.filter(item => new Date(item.dateDadmission) <= new Date(endDate));
        }
        return data;
    };

    const filteredData = filterDataByDate();
    const sortedData = filteredData.sort((a, b) => a[xAxisAttribute] - b[xAxisAttribute]);

    const attributeList = Object.keys(data[0]).filter((attribute) => {
        const value = data[0][attribute];
        return typeof value === 'number';
    });

    return (
        <div style={{ marginLeft: 'auto', marginRight: '50px' }}>
            <Typography variant="h4" sx={{ marginLeft: '60px', marginTop: '20px' }} gutterBottom>
                Variation de <span style={{ color: "#8884d8" }}>{yAxisAttribute}</span> en fonction de <span style={{ color: "rgb(0,117,253)" }}> {xAxisAttribute}</span> trié par ordre croissant
            </Typography>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormControl sx={{ width: '150px' }}>
                    <InputLabel id="x-axis-label">Axe des abscisses</InputLabel>
                    <Select
                        labelId="x-axis-label"
                        value={xAxisAttribute}
                        onChange={handleXAxisChange}
                    >
                        {attributeList.map((attribute) => (
                            <MenuItem key={attribute} value={attribute}>{attribute}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '150px' }}>
                    <InputLabel id="y-axis-label">Axe des ordonnées</InputLabel>
                    <Select
                        labelId="y-axis-label"
                        value={yAxisAttribute}
                        onChange={handleYAxisChange}
                    >
                        {attributeList.map((attribute) => (
                            <MenuItem key={attribute} value={attribute}>{attribute}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '150px' }}>
                    <InputLabel id="start-date-label">Date de début</InputLabel>
                    <Select
                        labelId="start-date-label"
                        value={startDate}
                        onChange={handleStartDateChange}
                    >
                        {dateOptions.map((date) => (
                            <MenuItem key={date} value={date}>{date}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '150px' }}>
                    <InputLabel id="end-date-label">Date de fin</InputLabel>
                    <Select
                        labelId="end-date-label"
                        value={endDate}
                        onChange={handleEndDateChange}
                    >
                        {dateOptions.map((date) => (
                            <MenuItem key={date} value={date}>{date}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>


            <LineChart width={650} height={450} data={sortedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xAxisAttribute} label={{ value: xAxisAttribute, offset: 20 }} />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" wrapperStyle={{ marginTop: '30px' }} />
                <Line type="monotone" dataKey={yAxisAttribute} stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default LineChartComponent;
