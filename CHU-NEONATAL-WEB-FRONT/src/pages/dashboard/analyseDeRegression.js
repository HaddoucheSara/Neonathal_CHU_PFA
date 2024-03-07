import React, { useState } from 'react';
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Scatter, Tooltip, Legend } from 'recharts';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";

const BirthWeightChart = ({ data, sVariableX, sVariableY }) => {
    return (
        <ScatterChart width={530} height={400}>
            <CartesianGrid />
            <XAxis type="number" dataKey={sVariableX} name={sVariableX} />
            <YAxis type="number" dataKey={sVariableY} name={sVariableY} label={{ value: sVariableY, angle: -90, position: 'insideLeft', dx: 0, dy: 50 }} />
            <Scatter name={sVariableX} data={data} fill="#8884d8" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
        </ScatterChart>
    );
};

const AnalyseDeRegression = ({ data }) => {
    const [sVariableX, setSVariableX] = useState('ageGestationnel');
    const [sVariableY, setSVariableY] = useState('poidsNaiss');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleVariableXChange = (event) => {
        setSVariableX(event.target.value);
    };

    const handleVariableYChange = (event) => {
        setSVariableY(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const numericAttributeList = Object.keys(data[0]).filter((attribute) => {
        const value = data[0][attribute];
        return typeof value === 'number';
    });

    const dateList = [...new Set(data.map((item) => item.dateDadmission.split('T')[0]))];

    if (!startDate && !endDate && dateList.length > 0) {
        setStartDate(dateList[0]);
        setEndDate(dateList[dateList.length - 1]);
    }

    const filteredData = data.filter((item) => {
        const date = item && item.dateDadmission && item.dateDadmission.split && item.dateDadmission.split('T')[0];


        return date >= startDate && date <= endDate;
    });

    return (
        <div>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ marginLeft: '40px', marginTop: '20px' }} gutterBottom>
                    <span style={{ color: 'rgb(0, 117, 253)' }}>{sVariableY}</span> en fonction de
                    <span style={{ color: 'rgb(0, 117, 253)' }}> {sVariableX}</span>
                </Typography>
                <FormControl sx={{ width: '150px', marginLeft: '10px', display: 'inline-block' }}>
                    <InputLabel style={{ marginTop: 'auto' }}>Axe X</InputLabel>
                    <Select id="variableX-select" value={sVariableX} onChange={handleVariableXChange}>
                        {numericAttributeList.map((attribute) => (
                            <MenuItem key={attribute} value={attribute}>
                                {attribute}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '150px', marginLeft: '20px', display: 'inline-block' }}>
                    <InputLabel style={{ marginTop: 'auto' }}>Axe Y</InputLabel>
                    <Select id="variableY-select" value={sVariableY} onChange={handleVariableYChange}>
                        {numericAttributeList.map((attribute) => (
                            <MenuItem key={attribute} value={attribute}>
                                {attribute}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '150px', marginLeft: '20px', display: 'inline-block' }}>
                    <InputLabel>Date de début</InputLabel>
                    <Select value={startDate} onChange={handleStartDateChange}>
                        {dateList.map((date) => (
                            <MenuItem key={date} value={date}>
                                {date}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '150px', marginLeft: '20px', display: 'inline-block' }}>
                    <InputLabel>Date de fin</InputLabel>
                    <Select value={endDate} onChange={handleEndDateChange}>
                        {dateList.map((date) => (
                            <MenuItem key={date} value={date}>
                                {date}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="h4" sx={{ marginTop: '35px' }} gutterBottom></Typography>
                {sVariableX && sVariableY && startDate && endDate && <BirthWeightChart data={filteredData} sVariableX={sVariableX} sVariableY={sVariableY} />}
            </Grid>
        </div>
    );
};

export default AnalyseDeRegression;
