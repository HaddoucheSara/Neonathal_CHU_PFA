import React, { useState,useEffect  } from 'react';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem, Paper,
    Select,
    Typography
} from '@mui/material';
import axios from 'axios';

import BarChartComponent from './barChartComponent';
import PieChartComponent from './pieChartComponent';
import LineChartComponent from "./lineChartComponent";

import AgeMereStatistics from "./ageMereStatistics";
import AnalyseDeRegression from "./analyseDeRegression";
import BirthWeightByDisease from "./birthWeightComparison";
import StatisticDisplay from "./statisticDisplay";

import {Line} from "recharts";

const DashboardDefault = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(' http://127.0.0.1:8000/api/matients')
            .then(response => response.json())
            .then(data => {
                const patients = data['hydra:member'];
                setData(patients);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de l\'API:', error);
                setError(error);
            });
    }, []);

//calculer la somme des patients debut

    const attributeKey = 'ageMere';
    const countByAttribute = data.reduce((acc, cur) => {
        if (cur[attributeKey] in acc) {
            acc[cur[attributeKey]] += 1;
        } else {
            acc[cur[attributeKey]] = 1;
        }
        return acc;
    }, {});

    const total = Object.values(countByAttribute).reduce((sum, count) => sum + count, 0);
    //calculer la somme des patients fin












    const variableKeys = data.length > 0 ? Object.keys(data[0]).filter((key) => key !== 'ip') : [];

    const [selectedVariable, setSelectedVariable] = useState('scoreDubowitz');
    const [selectedIps, setSelectedIps] = useState([0,1, 2,99]); // Sélectionnez les trois IPs par défaut ici
    // Sélectionnez les IPs par défaut ici

    const handleVariableChange = (event) => {
        setSelectedVariable(event.target.value);
    };
    const handleAttributeChange = (event) => {
        setSelectedAttribute(event.target.value);
    };

    const handleIpChange = (event) => {
        setSelectedIps(event.target.value);
    };

    return (
        <div
            style={{
                margin: '10px',
                border: '2px solid rgb(0,117,253)',
                borderRadius: '8px',
                padding: '10px',
                position: 'relative'
            }}
        >
            <h5
                style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgb(249,250,252)',
                    padding: '0 10px'
                }}
            >
                Tableau de bord
            </h5>
            <Grid container rowSpacing={0} columnSpacing={0} component={Paper}  >

                <Grid item xs={6}  >
                    <Grid item xs={12}>
                        <Typography variant="h4"  style={{marginTop: '20px', textAlign: 'center' }}>
                            Le nombre de nouveau-nés hospitalisés dans le service néonatal du CHU Oujda :<span style={{ color: 'rgb(0, 117, 253)' }}>{total}</span>
                        </Typography>

                        <AgeMereStatistics data={data}  />



                    </Grid>

                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center" sx={{  marginLeft: '50px' }} >


                        <Grid item xs={12}>



                            <PieChartComponent data={data}  />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>




                    {data.length > 0 && (
                        <Grid item xs={6}>
                            <Grid container  item xs={12}>
                                <LineChartComponent data={data} />
                            </Grid>
                        </Grid>
                    )}




                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center">
                        {data.length > 0 && (
                            <Grid item xs={6} >
                                <Grid container item xs={12} style={{marginRight: '70px' }}>
                                    <StatisticDisplay data={data} />
                                </Grid>
                            </Grid>

                        )}

                    </Grid>
                </Grid>
                <Grid item xs={6}>

                    <Grid container justifyContent="center" item xs={12}>


                        <BirthWeightByDisease data={data}  />


                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sx={{ width: '100%', height: '100%' }}>
                            <Typography sx={{ marginTop: '20px' }}></Typography>
                            {data.length > 0 && (
                                <Grid item xs={12} sx={{ width: '100%', height: '100%' }}>
                                    <Grid container item xs={12} sx={{ width: '100%', height: '100%' }}>
                                        <AnalyseDeRegression data={data} />
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}>





                    <Grid container justifyContent="center" item xs={12}>
                        <Grid container>
                            <Typography variant="h4"  sx={{ marginLeft:'20px',marginTop: '20px' }}  >Comparaison d'une variable des patients néonatals par choix de leurs ips</Typography  >
                            <Typography variant=""  sx={{ marginTop: '20px' }}  ></Typography>
                            <Grid item xs={6} sx={{ marginTop: '20px' }} >

                                <FormControl justifyContent="center" sx={{ marginLeft: '150px' }} >
                                    <InputLabel id="variable-select-label">Variable</InputLabel>
                                    <Select
                                        labelId="variable-select-label"
                                        id="variable-select"
                                        value={selectedVariable}
                                        onChange={handleVariableChange}
                                        sx={{ minWidth: '120px' }}
                                    >
                                        {variableKeys.map((variable) => (
                                            <MenuItem key={variable} value={variable}>
                                                {variable}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>

                                <FormControl justifyContent="center" sx={{ marginTop: '20px' }}>
                                    <InputLabel id="ip-select-label">ips</InputLabel>
                                    <Select
                                        labelId="ip-select-label"
                                        id="ip-select"
                                        multiple // Permettre la sélection multiple
                                        value={selectedIps}
                                        onChange={handleIpChange}
                                        sx={{ minWidth: '120px' }}
                                    >
                                        {data.map((record) => (
                                            <MenuItem key={record.ip} value={record.ip}>
                                                {record.ip}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" item xs={12}>


                            <BarChartComponent
                                data={data.filter((record) => selectedIps.includes(record.ip))}
                                xDataKey="ip"
                                barDataKeys={[selectedVariable]}
                            />
                        </Grid>




                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="center">


                        <Grid item xs={12}>


                            <Typography></Typography>


                        </Grid>
                    </Grid>
                </Grid>





            </Grid>
        </div>

    );
};

export default DashboardDefault;
