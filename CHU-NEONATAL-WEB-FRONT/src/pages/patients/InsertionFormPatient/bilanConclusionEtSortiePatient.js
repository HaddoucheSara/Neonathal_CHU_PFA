import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormGroup,
    Checkbox,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';

const FormBilanConclusionSortie = () => {
    const [formValues, setFormValues] = useState({
        ip: '',
        atresieOesophage: '',
        fenteLabioPalatine: '',
        atresieDesChoanes: '',
        anomalieOrthopedique: '',
        autreAnomalie: '',
        conclusionCliniqueEtDiagnostiquesEvoques: '',
        diagnosticRetenues: '',
        conduiteATenir: '',
        dateSortie: '',
        lieuDeTransfert: '',
        dateDeTransfert: '',
        dateDeDeces: '',
        diagnoticDeSortie: '',
        heureDeDeces: '',
        causeDeDeces: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Les données ont été remplies avec succès !');
        console.log(formValues);
    };
    /*
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };   */

    return (
        <form onSubmit={handleSubmit}>
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
                                    backgroundColor: 'rgb(249,250,252)',
                                    padding: '0 10px'
                                }}
                            >
                                Bilan Malformatif
                            </h5>
                            <TextField
                                label="Ip"
                                variant="outlined"
                                margin="normal"
                                style={{ marginLeft: '10px' }}
                                required
                                fullWidth
                                value={formValues.ip}
                                onChange={(e) => setFormValues({ ...formValues, ip: e.target.value })}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField
                                    label="Atresie Oesophage"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.atresieOesophage}
                                    onChange={(e) => setFormValues({ ...formValues, atresieOesophage: e.target.value })}
                                />
                                <TextField
                                    label="Fente Labio-palatine"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.fenteLabioPalatine}
                                    onChange={(e) => setFormValues({ ...formValues, fenteLabioPalatine: e.target.value })}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField
                                    label="Atresie des choanes"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.atresieDesChoanes}
                                    onChange={(e) => setFormValues({ ...formValues, atresieDesChoanes: e.target.value })}
                                />
                                <TextField
                                    label="Anomalie Orthopedique"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.anomalieOrthopedique}
                                    onChange={(e) => setFormValues({ ...formValues, anomalieOrthopedique: e.target.value })}
                                />
                            </div>
                            <TextField
                                label="Autre anomalie"
                                variant="outlined"
                                margin="normal"
                                style={{ marginLeft: '10px' }}
                                required
                                fullWidth
                                value={formValues.autreAnomalie}
                                onChange={(e) => setFormValues({ ...formValues, autreAnomalie: e.target.value })}
                            />
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
                                    backgroundColor: 'rgb(249,250,252)',
                                    padding: '0 10px'
                                }}
                            >
                                Diagnostic Retenues et Conduite a tenir
                            </h5>
                            <TextField
                                label="Diagnostic Retenues"
                                variant="outlined"
                                margin="normal"
                                style={{}}
                                required
                                fullWidth
                                multiline
                                rows={1}
                                value={formValues.diagnosticRetenues}
                                onChange={(e) => setFormValues({ ...formValues, diagnosticRetenues: e.target.value })}
                            />
                            <TextField
                                label="Conduite a tenir"
                                variant="outlined"
                                margin="normal"
                                style={{}}
                                required
                                fullWidth
                                multiline
                                rows={1}
                                value={formValues.conduiteATenir}
                                onChange={(e) => setFormValues({ ...formValues, conduiteATenir: e.target.value })}
                            />
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
                                    backgroundColor: 'rgb(249,250,252)',
                                    padding: '0 10px'
                                }}
                            >
                                Conclusion Clinique et diagnostiques evoques
                            </h5>
                            <TextField
                                label="Conclusion Clinique et diagnostiques evoques"
                                variant="outlined"
                                margin="normal"
                                style={{}}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                value={formValues.conclusionCliniqueEtDiagnostiquesEvoques}
                                onChange={(e) => setFormValues({ ...formValues, conclusionCliniqueEtDiagnostiquesEvoques: e.target.value })}
                            />
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
                                    backgroundColor: 'rgb(249,250,252)',
                                    padding: '0 10px'
                                }}
                            >
                                Infos sortie
                            </h5>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField
                                    label="Date de sortie"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.dateSortie}
                                    onChange={(e) => setFormValues({ ...formValues, dateSortie: e.target.value })}
                                />
                                <TextField
                                    label="Lieu de transfert"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.lieuDeTransfert}
                                    onChange={(e) => setFormValues({ ...formValues, lieuDeTransfert: e.target.value })}
                                />
                                <TextField
                                    label="Date de transfert"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.dateDeTransfert}
                                    onChange={(e) => setFormValues({ ...formValues, dateDeTransfert: e.target.value })}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextField
                                    label="Date de deces"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.dateDeDeces}
                                    onChange={(e) => setFormValues({ ...formValues, dateDeDeces: e.target.value })}
                                />
                                <TextField
                                    label="Heure de deces"
                                    variant="outlined"
                                    margin="normal"
                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                    required
                                    fullWidth
                                    value={formValues.heureDeDeces}
                                    onChange={(e) => setFormValues({ ...formValues, heureDeDeces: e.target.value })}
                                />
                            </div>
                            <TextField
                                label="Cause de decés"
                                variant="outlined"
                                margin="normal"
                                style={{}}
                                required
                                fullWidth
                                multiline
                                rows={1}
                                value={formValues.causeDeDeces}
                                onChange={(e) => setFormValues({ ...formValues, causeDeDeces: e.target.value })}
                            />
                            <TextField
                                label="Diagnotic de sortie"
                                variant="outlined"
                                margin="normal"
                                style={{}}
                                required
                                fullWidth
                                multiline
                                rows={1}
                                value={formValues.diagnoticDeSortie}
                                onChange={(e) => setFormValues({ ...formValues, diagnoticDeSortie: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Submit
            </Button>
        </form>
    );
};

export default FormBilanConclusionSortie;
