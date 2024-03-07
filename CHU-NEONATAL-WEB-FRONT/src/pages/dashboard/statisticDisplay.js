import React, { useState } from 'react';
import { Grid, Box, Typography, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const StatisticDisplay = ({ data }) => {
    const [selectedAttribute, setSelectedAttribute] = useState('ageGestationnel');
    const [startDate, setStartDate] = useState(data[0]?.dateDadmission || '');
    const [endDate, setEndDate] = useState(data[data.length - 1]?.dateDadmission || '');

    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const attributeList = Object.keys(data[0]).filter((key) => {
        // Filter attributes to keep only numeric ones
        const value = data[0][key];
        return typeof value === 'number';
    });

    const filteredData = data.filter((item) => {
        const date = item.dateDadmission; // Assuming the date is stored in the "dateDadmission" field
        return date >= startDate && date <= endDate;
    });

    const selectedData = filteredData.map((item) => item[selectedAttribute]);
    const average = selectedData.reduce((sum, value) => sum + value, 0) / selectedData.length;
    const max = Math.max(...selectedData);
    const min = Math.min(...selectedData);

    return (
        <div style={{ width: '230%', height: '150%', marginRight: '80px' }}>
            <Grid item xs={12} sx={{ width: '1000%', height: '500px', marginTop: '200px', marginRight: '80px' }}>
                <Box
                    boxShadow={2}
                    sx={{
                        width: '150%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2, // Add padding for inner space
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        Statistiques selon le choix d'un attribut souhaité
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Statistiques de {selectedAttribute}
                    </Typography>
                    <FormControl sx={{ width: '150px', mb: 2 }}>
                        <InputLabel>Attribut</InputLabel>
                        <Select value={selectedAttribute} onChange={handleAttributeChange}>
                            {attributeList.map((attribute) => (
                                <MenuItem key={attribute} value={attribute}>
                                    {attribute}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '150px', mb: 2 }}>
                        <InputLabel>Date de début</InputLabel>
                        <Select value={startDate} onChange={handleStartDateChange}>
                            {data.map((item) => (
                                <MenuItem key={item.dateDadmission} value={item.dateDadmission}>
                                    {new Date(item.dateDadmission).toLocaleDateString()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '150px', mb: 2 }}>
                        <InputLabel>Date de fin</InputLabel>
                        <Select value={endDate} onChange={handleEndDateChange}>
                            {data.map((item) => (
                                <MenuItem key={item.dateDadmission} value={item.dateDadmission}>
                                    {new Date(item.dateDadmission).toLocaleDateString()}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                        Moyenne: {average.toFixed(2)}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        Valeur maximale: {max}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        Valeur minimale: {min}
                    </Typography>
                </Box>
            </Grid>
        </div>
    );
};

export default StatisticDisplay;
