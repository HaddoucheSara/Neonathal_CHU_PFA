import React, { useState } from 'react';
import { PieChart, Tooltip, Legend, Pie, Cell } from 'recharts';
import randomColor from 'randomcolor';
import { Typography, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const PieChartComponent = ({ data }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedAttribute, setSelectedAttribute] = useState('villeDeNaissance');
    const attributeOptions = data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'ip') : [];

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };
    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const filterDataByDate = () => {
        if (startDate && endDate) {
            return data.filter((item) => item.dateDadmission >= startDate && item.dateDadmission <= endDate);
        } else if (startDate) {
            return data.filter((item) => item.dateDadmission >= startDate);
        } else if (endDate) {
            return data.filter((item) => item.dateDadmission <= endDate);
        }
        return data;
    };

    const filteredData = filterDataByDate();

    // Prétraitement des données pour calculer le nombre de lignes pour chaque attribut
    const countByAttribute = filteredData.reduce((acc, cur) => {
        if (cur[selectedAttribute] in acc) {
            acc[cur[selectedAttribute]] += 1;
        } else {
            acc[cur[selectedAttribute]] = 1;
        }
        return acc;
    }, {});

    // Conversion du résultat en un tableau d'objets
    const formattedData = Object.keys(countByAttribute).map((attribute) => ({
        [selectedAttribute]: attribute,
        count: countByAttribute[attribute],
    }));
    const total = formattedData.reduce((sum, entry) => sum + entry.count, 0);

    // Générer dynamiquement les couleurs pour les parties de la PieChart
    const colors = randomColor({
        count: formattedData.length,
        luminosity: 'bright',
    });

    return (
        <div>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ marginLeft: '100px', marginTop: '20px' }} gutterBottom>
                    Regroupement des patients néonatals par : <span style={{ color: 'rgb(0, 117, 253)' }}>{selectedAttribute}</span>
                </Typography>
                <Typography sx={{ marginTop: '20px' }}></Typography>
            </Grid>
            <Typography variant="h6">Choix de l'attribut et de la période de temps :</Typography>
            <Grid container spacing={2} alignItems="center" sx={{ marginTop: '20px' }}>
                <Grid item >
                    <FormControl sx={{ marginLeft: '20px', width: '150px' }}>
                        <InputLabel>Attribut</InputLabel>
                        <Select value={selectedAttribute} onChange={handleAttributeChange}>
                            {attributeOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ width: '150px' }}>
                        <InputLabel id="start-date-label">Date de début</InputLabel>
                        <Select labelId="start-date-label" id="start-date-select" value={startDate} onChange={handleStartDateChange}>
                            <MenuItem value="">Toutes les dates</MenuItem>
                            {data.map((item, index) => (
                                <MenuItem key={index} value={item.dateDadmission}>
                                    {new Date(item.dateDadmission).toLocaleDateString()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth sx={{ width: '150px' }}>
                        <InputLabel id="end-date-label">Date de fin</InputLabel>
                        <Select labelId="end-date-label" id="end-date-select" value={endDate} onChange={handleEndDateChange}>
                            <MenuItem value="">Toutes les dates</MenuItem>
                            {data.map((item, index) => (
                                <MenuItem key={index} value={item.dateDadmission}>
                                    {new Date(item.dateDadmission).toLocaleDateString()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <PieChart width={600} height={300}>
                <Pie data={formattedData} dataKey="count" nameKey={selectedAttribute} outerRadius={110} label>
                    {formattedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
