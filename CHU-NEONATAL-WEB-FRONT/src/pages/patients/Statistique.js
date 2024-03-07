import React, { useState,useEffect  } from 'react';
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem, Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography
} from '@mui/material';
import axios from 'axios';

import {Line} from "recharts";

const Statistique = () => {



    return (

            <Grid  component={Paper}  >

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                                position: 'relative',
                                width: 'calc(50% - 10px)'
                            }}
                        >
                            <div
                                style={{
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
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche d'allaitement journalière
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Date Fiche Allaitement:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[Valeur de la date]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography style={{ fontWeight: 'bold' }}>IP:</Typography>
                                        <Typography style={{ marginRight: 400 }}>[Valeur de l'IP]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography style={{ fontWeight: 'bold' }}>Prématuré ou à terme:</Typography>
                                        <Typography style={{ marginRight: 180 }}>[Valeur de Prématuré ou à terme]</Typography>
                                            </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography style={{ fontWeight: 'bold' }}>Poids en kg:</Typography>
                                        <Typography style={{ marginRight: 300 }}>[Valeur du poids en kg]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography style={{ fontWeight: 'bold' }}>Quantité en cc par 3h:</Typography>
                                        <Typography style={{ marginRight: 170 }}>[Valeur de la quantité en cc par 3h]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" align="center">Tableau</Typography>
                                    </Grid>
                                    <TableContainer component={Paper} style={{ marginLeft: 30 }}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Heure</TableCell>
                                                    <TableCell>Quantité en cc</TableCell>
                                                    <TableCell>Résidus</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {/* Remplacez les lignes ci-dessous avec vos propres données */}
                                                <TableRow>
                                                    <TableCell>8:00</TableCell>
                                                    <TableCell>100</TableCell>
                                                    <TableCell>10</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>11:00</TableCell>
                                                    <TableCell>150</TableCell>
                                                    <TableCell>5</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>14:00</TableCell>
                                                    <TableCell>120</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>17:00</TableCell>
                                                    <TableCell>160</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>20:00</TableCell>
                                                    <TableCell>160</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>23:00</TableCell>
                                                    <TableCell>160</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>02:00</TableCell>
                                                    <TableCell>160</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>05:00</TableCell>
                                                    <TableCell>160</TableCell>
                                                    <TableCell>0</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </div>
                            <div
                                style={{
                                    border: '2px solid rgb(0,117,253)',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    position: 'relative',
                                    marginTop: '10px'
                                }}
                            >


                                <h5
                                    style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche de surveillance D.A.C
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Nom et prénom:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[Nom et prénom]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Age:</Typography>
                                            <Typography style={{ marginRight: 400 }}>[Age]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Prématuré ou à terme:</Typography>
                                            <Typography style={{ marginRight: 180 }}>[Valeur de Prématuré ou à terme]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Date d'hospitalisation:</Typography>
                                            <Typography style={{ marginRight: 300 }}>[Date d'hospitalisation]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Etablissement:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Etablissement]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Service:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Service]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>N° d'admission :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° d'admission]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Ip :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Ip]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Mois :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Mois]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Année :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Année]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>N° de salle :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de salle]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>N° de lit :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Diagnostic:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Diagnostic]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Fiche n°  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>


                                </Grid>
                            </div>
                          <div style={{ marginTop: '10px '}}>  </div>

                            <div
                                style={{
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
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche des mesures-informations
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Date:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[Nom et prénom]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Particularité:</Typography>
                                            <Typography style={{ marginRight: 400 }}>[Age]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Identité:</Typography>
                                            <Typography style={{ marginRight: 180 }}>[Valeur de Prématuré ou à terme]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Ip:</Typography>
                                            <Typography style={{ marginRight: 300 }}>[Date d'hospitalisation]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Age:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Etablissement]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Sexe:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Service]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Terme :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° d'admission]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Poids :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Ip]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>MH :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Mois]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>DRB :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Année]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>SAP :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de salle]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Débit :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>CC/Min:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Diagnostic]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>SJ10%  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>CC/24h  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>CA++  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>K+  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>NA+  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Primen  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Fiche n°]</Typography>
                                        </div>
                                    </Grid>


                                </Grid>
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                                position: 'relative',
                                width: 'calc(50% - 10px)'
                            }}
                        >
                            <div
                                style={{
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
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche de la mise à jour du patient
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>date:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[Nom et prénom]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Ip:</Typography>
                                            <Typography style={{ marginRight: 400 }}>[Age]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Couverture médicale:</Typography>
                                            <Typography style={{ marginRight: 180 }}>[Valeur de Prématuré ou à terme]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Sexe:</Typography>
                                            <Typography style={{ marginRight: 300 }}>[Date d'hospitalisation]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Provenance:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Etablissement]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>N-Né:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Service]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Mère :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° d'admission]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Hospitalisé pour :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Ip]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>DAE et/ou Dc retenu  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Mois]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Sur plan Rx :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Année]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Traitement :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de salle]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Evolution :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Durant la garde:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Diagnostic]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}></Typography>
                                            <Typography style={{ marginRight: 170 }}></Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}></Typography>
                                            <Typography style={{ marginRight: 170 }}></Typography>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                            <div
                                style={{
                                    border: '2px solid rgb(0,117,253)',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    position: 'relative',
                                    marginTop: '10px'
                                }}
                            >
                                {/* Bottom content for the right div goes here */}

                                <h5
                                    style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche de surveillance D.A.C 2
                                </h5>
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">Tableau</Typography>
                                </Grid>
                                <TableContainer component={Paper} style={{marginRight: 5, marginLeft: 20, width: '95%' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Heure</TableCell>
                                                <TableCell>Glyémie</TableCell>
                                                <TableCell>Glycosurie</TableCell>
                                                <TableCell>Acétonurie</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {/* Remplacez les lignes ci-dessous avec vos propres données */}
                                            <TableRow>
                                                <TableCell>8:00</TableCell>
                                                <TableCell>100</TableCell>
                                                <TableCell>10</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>09:00</TableCell>
                                                <TableCell>150</TableCell>
                                                <TableCell>5</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>10:00</TableCell>
                                                <TableCell>120</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>11:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>12:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>13:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>14:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>15:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>16:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>17:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>18:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>19:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>20:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>21:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>22:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>23:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>00:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>01:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>02:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>03:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>04:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>05:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>06:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>07:00</TableCell>
                                                <TableCell>160</TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>10</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>










                    </div>













                </div>


                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                                position: 'relative',
                                width: 'calc(50% - 10px)'
                            }}
                        >

                            <div
                                style={{
                                    border: '2px solid rgb(0,117,253)',
                                    borderRadius: '8px',
                                    padding: '10px',
                                    position: 'relative',
                                    marginTop: '10px'
                                }}
                            >

                                <h5
                                    style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche de mesures-soin de routine
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Table chauffante:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[Nom et prénom]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>CVS:</Typography>
                                            <Typography style={{ marginRight: 400 }}>[Age]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Oxygenothérapie(l/min):</Typography>
                                            <Typography style={{ marginRight: 180 }}>[Valeur de Prématuré ou à terme]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Position demi-assise:</Typography>
                                            <Typography style={{ marginRight: 300 }}>[Date d'hospitalisation]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>SNG:</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Etablissement]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>IPP(mg/j):</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Service]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Phototherapie :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° d'admission]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Tobrex :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Ip]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Soind de l'ombilic(3x/j)  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Mois]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Konakion(2mg/semaine) :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Année]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Fer (EN IM ou PO) :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de salle]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Vitamines :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div >
                                            <Typography style={{ fontWeight: 'bold', color: 'rgb(0, 117, 253)', marginLeft: 30 }}>Drogues</Typography>
                                        </div>
                                    </Grid>



                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Dobutamine :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Ip]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Adrénaline  :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Mois]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Dopamine :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[Année]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Noradre :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de salle]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Autres :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div >
                                            <Typography style={{ fontWeight: 'bold', color: 'rgb(0, 117, 253)', marginLeft: 30 }}>ATBs</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Triaxon/kefotax :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Axymicine :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Genta/Amiklin :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Tienam :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>Ciproxyne :</Typography>
                                            <Typography style={{ marginRight: 170 }}>[N° de lit]</Typography>
                                        </div>
                                    </Grid>


                                </Grid>

                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                                position: 'relative',
                                width: 'calc(50% - 10px)'
                            }}
                        >
                            <div
                                style={{
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
                                        backgroundColor: 'rgb(255, 255, 255)',
                                        padding: '0 10px'
                                    }}
                                >
                                    Fiche de surveillance journaliére
                                </h5>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>date:</Typography>
                                            <Typography style={{ marginRight: 270 }}>[date]</Typography>

                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Typography style={{ fontWeight: 'bold' }}>NN de Mme:</Typography>
                                            <Typography style={{ marginRight: 300 }}>[NN de Mme]</Typography>
                                        </div>
                                    </Grid>
                                    <TableContainer component={Paper}  style={{marginRight: 5, marginLeft: 8, width: '97%' }}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell></TableCell>
                                                    <TableCell>8h</TableCell>
                                                    <TableCell>11h</TableCell>
                                                    <TableCell>15h</TableCell>
                                                    <TableCell>19h</TableCell>
                                                    <TableCell>22h</TableCell>
                                                    <TableCell>00h</TableCell>
                                                    <TableCell>3h</TableCell>
                                                    <TableCell>5h</TableCell>
                                                    <TableCell>8h</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>T</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>FC</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>FR</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>SaO2</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>TA</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Dextro</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Poids</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Peau</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Diurèse</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Vomissement</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Selles</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Convulsions</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Apnées</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>PC</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Périmètre ombilical</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Quantité de glucose en g/24h</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>CC de lait /24h</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>ATB en g/24h</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </div>

                        </div>




                    </div>




                </div>



            </Grid>


    );
};

export default Statistique;
