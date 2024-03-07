import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const AgeMereStatistics = ({ data }) => {
    const containerStyle = {
        backgroundColor: 'primary',
        padding: '16px',
        borderRadius: '8px',
        color: 'black',
    };

    const titleStyle = {
        marginBottom: '16px',
    };

    const statisticStyle = {
        marginBottom: '8px',
    };

    const averageAge = data.reduce((sum, item) => sum + item.ageMere, 0) / data.length;
    const maxAge = Math.max(...data.map(item => item.ageMere));
    const minAge = Math.min(...data.map(item => item.ageMere));

    const averageWeight = data.reduce((sum, item) => sum + item.poidsNaiss, 0) / data.length;
    const maxWeight = Math.max(...data.map(item => item.poidsNaiss));
    const minWeight = Math.min(...data.map(item => item.poidsNaiss));

    const averageHeight = data.reduce((sum, item) => sum + item.tailleNaiss, 0) / data.length;
    const maxHeight = Math.max(...data.map(item => item.tailleNaiss));
    const minHeight = Math.min(...data.map(item => item.tailleNaiss));

    const averagePc = data.reduce((sum, item) => sum + item.pcNaiss, 0) / data.length;
    const maxPc = Math.max(...data.map(item => item.pcNaiss));
    const minPc = Math.min(...data.map(item => item.pcNaiss));

    return (
        <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '20px' }}>
            <Grid item xs={6}>
                <Box sx={containerStyle} boxShadow={2}>
                    <Typography variant="h6" sx={titleStyle}>Statistiques de l'âge de la mère du patient néonatal</Typography>
                    <Typography sx={statisticStyle}>Moyenne: {averageAge.toFixed(2)}</Typography>
                    <Typography sx={statisticStyle}>Valeur maximal: {maxAge}</Typography>
                    <Typography sx={statisticStyle}>Valeur minimal: {minAge}</Typography>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box sx={containerStyle} boxShadow={2}>
                    <Typography variant="h6" sx={titleStyle}>Statistiques du poids de naissance du patient néonatal</Typography>
                    <Typography sx={statisticStyle}>Moyenne: {averageWeight.toFixed(2)}</Typography>
                    <Typography sx={statisticStyle}>Valeur maximal: {maxWeight}</Typography>
                    <Typography sx={statisticStyle}>Valeur minimal: {minWeight}</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={containerStyle} boxShadow={2}>
                    <Typography variant="h6" sx={titleStyle}>Statistiques de la taille de naissance du patient néonatal</Typography>
                    <Typography sx={statisticStyle}>Moyenne: {averageHeight.toFixed(2)}</Typography>
                    <Typography sx={statisticStyle}>Valeur maximal: {maxHeight}</Typography>
                    <Typography sx={statisticStyle}>Valeur minimal: {minHeight}</Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={containerStyle} boxShadow={2}>
                    <Typography variant="h6" sx={titleStyle}>Statistiques du plan cranien à la naissance du patient méonatal</Typography>
                    <Typography sx={statisticStyle}>Moyenne: {averagePc.toFixed(2)}</Typography>
                    <Typography sx={statisticStyle}>Valeur maximal: {maxPc}</Typography>
                    <Typography sx={statisticStyle}>Valeur minimal: {minPc}</Typography>
                </Box>
            </Grid>

        </Grid>
    );
};

export default AgeMereStatistics;
