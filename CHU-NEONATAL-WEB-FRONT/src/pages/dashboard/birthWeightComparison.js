import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import { Grid, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const BirthWeightByDisease = ({ data }) => {
    const initialStartDate = '2015-01-01'; // Date de début par défaut
    const initialEndDate = '2023-12-31'; // Date de fin par défaut

    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const filteredData = data.filter((item) => {
        const date = item.dateDadmission?.split('T')[0];
        return date && date >= startDate && date <= endDate;
    });

    // Créer un tableau des maladies uniques
    const uniqueDiseases = [...new Set(filteredData.flatMap((item) => item.preciserIvg || []))];

    // Créer un objet pour stocker les données par maladie
    const diseaseData = {};
    uniqueDiseases.forEach((disease) => {
        const weights = filteredData.filter((item) => item.preciserIvg?.includes(disease)).map((item) => item.poidsNaiss);
        const averageWeight = weights.reduce((acc, weight) => acc + weight, 0) / weights.length;
        diseaseData[disease] = averageWeight;
    });

    // Convertir l'objet diseaseData en un tableau d'objets avec clés 'disease' et 'averageWeight'
    const chartData = Object.keys(diseaseData).map((disease) => ({
        disease,
        averageWeight: diseaseData[disease],
    }));

    return (
        <div>
            <Typography variant="h4" sx={{ marginLeft: '20px', marginTop: '20px' }} gutterBottom>
                Poids de naissance moyens des nouveau-nés en fonction des maladies de leur mères
            </Typography>
            <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <FormControl sx={{ width: '150px', marginLeft: '20px', marginRight: '10px' }}>
                    <InputLabel>Date de début</InputLabel>
                    <Select value={startDate} onChange={handleStartDateChange}>
                        {data.map((item) => (
                            item.dateDadmission && (
                                <MenuItem key={item.dateDadmission} value={item.dateDadmission.split('T')[0]}>
                                    {item.dateDadmission.split('T')[0]}
                                </MenuItem>
                            )
                        ))}
                    </Select>
                </FormControl>

                <FormControl sx={{ width: '150px', marginLeft: '10px' }}>
                    <InputLabel>Date de fin</InputLabel>
                    <Select value={endDate} onChange={handleEndDateChange}>
                        {data.map((item) => (
                            item.dateDadmission && (
                                <MenuItem key={item.dateDadmission} value={item.dateDadmission.split('T')[0]}>
                                    {item.dateDadmission.split('T')[0]}
                                </MenuItem>
                            )
                        ))}
                    </Select>
                </FormControl>
            </div>

            <Grid sx={{ marginTop: '70px' }}>
                <BarChart width={550} height={400} data={chartData}>
                    ```jsx
                    <CartesianGrid />
                    <XAxis dataKey="disease" tick={false} />
                    <YAxis dataKey="averageWeight" name="Poids de naissance moyen" label={{ value: 'Poids de naissance moyen', angle: -90, position: 'insideLeft', dx: 0, dy: 50 }} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Bar dataKey="averageWeight" stackId="stack" fill="#8884d8" />
                </BarChart>
            </Grid>
        </div>
    );
};

export default BirthWeightByDisease;
