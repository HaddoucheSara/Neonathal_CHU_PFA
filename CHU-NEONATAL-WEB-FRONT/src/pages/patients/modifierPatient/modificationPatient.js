import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    TextField,
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

} from '@mui/material';

const steps = ['Info Personnels', 'Info Naissance', 'Examens1', 'Examens2', 'Infos Sortie'];


const ModificationPageMedecin = () => {
    const { id } = useParams(); // Récupère l'identifiant de la ligne à modifier depuis l'URL

    const [rowData, setRowData] = useState(null);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {

        // Passer à l'étape suivante
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    useEffect(() => {
        const fetchRowData = async () => {
            try {
                // Effectuer la requête GET pour obtenir la ligne correspondante à l'aide de l'identifiant
                const response = await axios.get(` http://127.0.0.1:8000/api/matients/${id}`);
                const row = response.data; // Supposons que la réponse contient les données de la ligne

                setRowData(row);
            } catch (error) {
                // Gérer les erreurs de la requête GET
                // ...
            }
        };

        fetchRowData();
    }, [id]);

    console.log(rowData);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Gérer le champ "ip" lorsque sa valeur est null
        const modifiedRowData = { ...rowData };
        modifiedRowData.ip = modifiedRowData.ip === null ? 0 : parseInt(modifiedRowData.ip);
        modifiedRowData.age = modifiedRowData.age === null ? 0 : parseInt(modifiedRowData.age);
        modifiedRowData.ageMere = modifiedRowData.ageMere === null ? 0 : parseInt(modifiedRowData.ageMere);
        modifiedRowData.agePere = modifiedRowData.agePere === null ? 0 : parseInt(modifiedRowData.agePere);
        modifiedRowData.pariteMere = modifiedRowData.pariteMere === null ? 0 : parseInt(modifiedRowData.pariteMere);
        modifiedRowData.gestiteMere = modifiedRowData.gestiteMere === null ? 0 : parseInt(modifiedRowData.gestiteMere);
        modifiedRowData.ageGestationnel = modifiedRowData.ageGestationnel === null ? 0 : parseInt(modifiedRowData.ageGestationnel);
        modifiedRowData.nbreFrere = modifiedRowData.nbreFrere === null ? 0 : parseInt(modifiedRowData.nbreFrere);
        modifiedRowData.dureeDeTravailAcc = modifiedRowData.dureeDeTravailAcc === null ? 0 : parseInt(modifiedRowData.dureeDeTravailAcc);
        modifiedRowData.apgar1Min = modifiedRowData.apgar1Min === null ? 0 : parseInt(modifiedRowData.apgar1Min);
        modifiedRowData.apgar5Min = modifiedRowData.apgar5Min === null ? 0 : parseInt(modifiedRowData.apgar5Min);
        modifiedRowData.apgar10Min = modifiedRowData.apgar10Min === null ? 0 : parseInt(modifiedRowData.apgar10Min);
        modifiedRowData.battementsDesAilesAuNez = modifiedRowData.battementsDesAilesAuNez === null ? 0 : parseInt(modifiedRowData.battementsDesAilesAuNez);
        modifiedRowData.tirageIntercostal = modifiedRowData.tirageIntercostal === null ? 0 : parseInt(modifiedRowData.tirageIntercostal);
        modifiedRowData.balancementsThoracoAbdominal = modifiedRowData.balancementsThoracoAbdominal === null ? 0 : parseInt(modifiedRowData.balancementsThoracoAbdominal);
        modifiedRowData.entonnoirXyphoidien = modifiedRowData.entonnoirXyphoidien === null ? 0 : parseInt(modifiedRowData.entonnoirXyphoidien);
        modifiedRowData.ceignementExpiratoire = modifiedRowData.ceignementExpiratoire === null ? 0 : parseInt(modifiedRowData.ceignementExpiratoire);


        modifiedRowData.poidsNaiss = modifiedRowData.poidsNaiss === null ? 0.0 : parseFloat(modifiedRowData.poidsNaiss);
        modifiedRowData.tailleNaiss = modifiedRowData.tailleNaiss === null ? 0.0 : parseFloat(modifiedRowData.tailleNaiss);
        modifiedRowData.pcNaiss = modifiedRowData.pcNaiss === null ? 0.0 : parseFloat(modifiedRowData.pcNaiss);
        modifiedRowData.tMereAcc = modifiedRowData.tMereAcc === null ? 0.0 : parseFloat(modifiedRowData.tMereAcc);
        modifiedRowData.pEtatGeneral = modifiedRowData.pEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.pEtatGeneral);
        modifiedRowData.tEtatGeneral = modifiedRowData.tEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.tEtatGeneral);
        modifiedRowData.pcEtatGeneral = modifiedRowData.pcEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.pcEtatGeneral);
        modifiedRowData.trcEtatGeneral = modifiedRowData.trcEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.trcEtatGeneral);
        modifiedRowData.taEtatGeneral = modifiedRowData.taEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.taEtatGeneral);
        modifiedRowData.dextro = modifiedRowData.dextro === null ? 0.0 : parseFloat(modifiedRowData.dextro);
        modifiedRowData.sa2 = modifiedRowData.sa2 === null ? 0.0 : parseFloat(modifiedRowData.sa2);
        modifiedRowData.frEtatGeneral = modifiedRowData.frEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.frEtatGeneral);
        modifiedRowData.fcEtatGeneral = modifiedRowData.fcEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.fcEtatGeneral);
        modifiedRowData.tempEtatGeneral = modifiedRowData.tempEtatGeneral === null ? 0.0 : parseFloat(modifiedRowData.tempEtatGeneral);
        modifiedRowData.qteMeconium = modifiedRowData.qteMeconium === null ? 0.0 : parseFloat(modifiedRowData.qteMeconium);
        modifiedRowData.scoreDubowitz = modifiedRowData.scoreDubowitz === null ? 0.0 : parseFloat(modifiedRowData.scoreDubowitz);
        modifiedRowData.scoreFarr = modifiedRowData.scoreFarr === null ? 0.0 : parseFloat(modifiedRowData.scoreFarr);





        try {
            // Effectuer la requête PUT avec les données modifiées
            await axios.put(` http://127.0.0.1:8000/api/matients/${id}`, modifiedRowData);

            // Rediriger ou effectuer d'autres actions après la modification réussie
            // ...
            setAlertMessage('Les données ont été mise à jour avec succès !');
            setAlertSeverity('success');
            setAlertOpen(true);
        } catch (error) {
            // Gérer les erreurs de la requête PUT
            // ...
            setAlertMessage("Une erreur s'est produite lors de la mise à jour du patient.");
            setAlertSeverity('error');
            setAlertOpen(true);
            console.error(error);
        }
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };


    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        setRowData((prevData) => {
            if (type === 'checkbox') {
                if (checked) {
                    return {
                        ...prevData,
                        preciserIvg: [...prevData.preciserIvg, name],
                    };
                } else {
                    const updatedValues = prevData.preciserIvg.filter((value) => value !== name);
                    return {
                        ...prevData,
                        preciserIvg: updatedValues,
                    };
                }
            } else {
                return {
                    ...prevData,
                    [name]: value,
                };
            }
        });
    };


    if (!rowData) {
        return <div>Loading...</div>; // Affiche un indicateur de chargement si les données sont en cours de récupération
    }

    return (
        <div
            // style={{
            //     margin: '10px',
            //     border: '2px solid rgb(0,117,253)',
            //     borderRadius: '8px',
            //     padding: '10px',
            //     position: 'relative'
            // }}
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
                Modifier informations du patient
            </h5>
            <br/> <br/>
            <>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Typography variant="h6" align="center" gutterBottom>
                    {steps[activeStep]}
                </Typography>
                <form onSubmit={handleFormSubmit} >
                    {activeStep === 0 && (
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            width: 'calc(50% - 10px)'
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
                                            Infos du patient neonatal
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField
                                                label="Ip"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }} // Ajoute une marge à droite
                                                required
                                                fullWidth
                                                value={rowData.ip !== null ? rowData.ip.toString() : ''}
                                                onChange={handleInputChange}
                                                name="ip"
                                            />

                                            <TextField
                                                label="Nom maman"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite
                                                fullWidth
                                                value={rowData.nom?? ''}
                                                onChange={handleInputChange}
                                                name="nom"
                                            />

                                            <TextField
                                                label="Prénom maman"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite

                                                fullWidth
                                                value={rowData.prenomMere?? ''}
                                                onChange={handleInputChange}
                                                name="prenomMere"
                                            />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Couverture sanitaire</InputLabel>
                                                <Select
                                                    value={rowData.couvertureSanitaire?? ''}
                                                    onChange={handleInputChange}
                                                    name="couvertureSanitaire"
                                                    label="Couverture sanitaire"
                                                >
                                                    <MenuItem value="masculin">Payant</MenuItem>
                                                    <MenuItem value="feminin">Mutualiste</MenuItem>
                                                    <MenuItem value="autre">Autre</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Sexe</InputLabel>
                                                <Select
                                                    value={rowData.sexeAvantExamen?? ''}
                                                    onChange={handleInputChange}
                                                    label="Sexe"
                                                    name="sexeAvantExamen"
                                                >
                                                    <MenuItem value="masculin">Masculin</MenuItem>
                                                    <MenuItem value="feminin">Féminin</MenuItem>
                                                    <MenuItem value="autre">Autre</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <TextField
                                            label="Region de naissance"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={rowData.regionDeNaissance ?? ''}
                                            onChange={handleInputChange}
                                            name="regionDeNaissance"                                  />
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="villeNaissance"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }} // Ajouter une marge à gauche et à droite

                                                fullWidth
                                                value={rowData.villeDeNaissance?? ''}
                                                onChange={handleInputChange}
                                                name="villeDeNaissance"                                     />
                                            <TextField
                                                label="Ville provenance"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.villeProvenance?? ''}
                                                onChange={handleInputChange}
                                                name="villeProvenance"                                    />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Telephone"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.telephone?? ''}
                                                onChange={handleInputChange}
                                                name="telephone"                                       />
                                            <TextField
                                                label="Age"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.age!== null ? rowData.age.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                                onChange={handleInputChange}
                                                name="age"
                                            />
                                        </div>
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date et heure de naissance:
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={rowData.dateDeNaissance || ''}
                                                onChange={handleInputChange}
                                                name="dateDeNaissance"
                                            />



                                            <TextField
                                                label="Heure de naissance"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="time"
                                                fullWidth
                                                value={rowData.heureDeNaissance || ''}
                                                onChange={handleInputChange}
                                                name="heureDeNaissance"

                                            />

                                        </div>

                                        <TextField
                                            label="Adresse"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={rowData.adresse ?? ''}
                                            onChange={handleInputChange}
                                            name="adresse"

                                        />
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            width: 'calc(50% - 10px)'
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
                                            Infos d'admission
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Mode d'Admission</InputLabel>
                                                <Select
                                                    value={rowData.modeDadmission ?? ''}
                                                    onChange={handleInputChange}
                                                    label="Sexe"
                                                    name="modeDadmission"
                                                >
                                                    <MenuItem value="Urgence">Urgenge</MenuItem>
                                                    <MenuItem value="Rendez-vous">Rendez-vous</MenuItem>
                                                    <MenuItem value="TRANSFERT">TRANSFERT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <TextField
                                            label="Medecin de garde a l'admission"
                                            variant="outlined"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            margin="normal"

                                            fullWidth
                                            value={rowData.medecinGardeAdmission ?? ''}
                                            onChange={handleInputChange}
                                            name="medecinGardeAdmission"
                                        />
                                        <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                            Date et heure d'admission:
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={rowData.dateDadmission || ''}
                                                onChange={handleInputChange}
                                                name="dateDadmission"
                                                required

                                            />
                                            <TextField
                                                label="Heure d'admission"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                type="time"
                                                fullWidth
                                                defaultValue={rowData.heureDadmission || ''}
                                                onChange={handleInputChange}
                                                name="heureDadmission"

                                            />

                                        </div>
                                        <TextField
                                            label="Diagnostic d'entrée"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={rowData.diagnosticDentree?? ''}
                                            onChange={handleInputChange}
                                            name="diagnosticDentree"

                                        />
                                        <TextField
                                            label="Motif d'hospitalisation(cause)"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={rowData.motifDhospitalisation?? ''}
                                            onChange={handleInputChange}
                                            name="motifDhospitalisation"
                                        />
                                    </div>
                                </div>

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
                                        Infos Parents
                                    </h5>

                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <TextField
                                            label="Age de la mere"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={rowData.ageMere !== null ? rowData.ageMere.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                            onChange={handleInputChange}
                                            name="ageMere"


                                        />
                                        <TextField
                                            label="Profession de le mere"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={rowData.professionMere?? ''}
                                            onChange={handleInputChange}
                                            name="professionMere"                                   />
                                        <TextField
                                            label="Age du pere"
                                            variant="outlined"
                                            margin="normal"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}

                                            fullWidth
                                            value={rowData.agePere !== null ? rowData.agePere.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                            onChange={handleInputChange}
                                            name="agePere"

                                        />
                                        <TextField
                                            label="Profession du pere"
                                            variant="outlined"
                                            style={{ marginLeft: '10px', marginRight: '10px' }}
                                            margin="normal"

                                            fullWidth
                                            value={rowData.professionPere?? ''}
                                            onChange={handleInputChange}
                                            name="professionPere"                                  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeStep === 1 && (
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            width: 'calc(50% - 10px)'
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
                                            Antécedants familliaux
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>Cosanguinité</InputLabel>
                                                <Select
                                                    value={rowData.cosanguinite?? ''}
                                                    onChange={handleInputChange}
                                                    label="Cosanguinite"
                                                    name="cosanguinite"
                                                >
                                                    <MenuItem value="Oui">Oui</MenuItem>
                                                    <MenuItem value="Non">Non</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>

                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Grossesse:
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>ParitéMére</InputLabel>
                                                <Select
                                                    value={rowData.pariteMere || 0}
                                                    onChange={handleInputChange}
                                                    label="ParitéMére"
                                                    name="pariteMere"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                    <MenuItem value={11}>11</MenuItem>
                                                    <MenuItem value={12}>12</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>GestitéMére</InputLabel>
                                                <Select
                                                    value={rowData.gestiteMere|| 0}
                                                    onChange={handleInputChange}
                                                    label="gestiteMere"
                                                    name="gestiteMere"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                    <MenuItem value={11}>11</MenuItem>
                                                    <MenuItem value={12}>12</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                label="Age gestationnel"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={rowData.ageGestationnel!== null ? rowData.ageGestationnel.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                                onChange={handleInputChange}
                                                name="ageGestationnel"
                                            />

                                        </div>

                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Déroulemnet de la grossesse:
                                            </Typography>
                                        </div>
                                        <div>
                                            <FormControl component="fieldset" sx={{ mt: 2 }}>
                                                <FormLabel component="legend">IVG</FormLabel>
                                                <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="toxoplasmose congénitale"
                                                        checked={rowData.preciserIvg.includes('toxoplasmose congénitale')}
                                                        name="toxoplasmose congénitale"
                                                        onChange={handleInputChange}

                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Tuberculose"
                                                        checked={rowData.preciserIvg.includes('Tuberculose')}
                                                        name="Tuberculose"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Paludisme"
                                                        checked={rowData.preciserIvg.includes('Paludisme')}
                                                        name="Paludisme"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="candidose congénitale"
                                                        checked={rowData.preciserIvg.includes('candidose congénitale')}
                                                        name="candidose congénitale"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Herpes génital"
                                                        checked={rowData.preciserIvg.includes('Herpes génital')}
                                                        name="Herpes génital"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Infection à cytomégalovirus"
                                                        checked={rowData.preciserIvg.includes('Infection à cytomégalovirus')}
                                                        name="Infection à cytomégalovirus"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Varicelle"
                                                        checked={rowData.preciserIvg.includes('Varicelle')}
                                                        name="Varicelle"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Hépatite B"
                                                        checked={rowData.preciserIvg.includes('Hépatite B')}
                                                        name="Hépatite B"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Hépatite C"
                                                        checked={rowData.preciserIvg.includes('Hépatite C')}
                                                        name="Hépatite C"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Virus immunodéficience humaine"
                                                        checked={rowData.preciserIvg.includes('Virus immunodéficience humaine')}
                                                        name="Virus immunodéficience humaine"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Parvovirus B19"
                                                        checked={rowData.preciserIvg.includes('Parvovirus B19')}
                                                        name="Parvovirus B19"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Rubéole"
                                                        checked={rowData.preciserIvg.includes('Rubéole')}
                                                        name="Rubéole"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Diabèthe"
                                                        checked={rowData.preciserIvg.includes('Diabèthe')}
                                                        name="Diabèthe"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Cardiopathie"
                                                        checked={rowData.preciserIvg.includes('Cardiopathie')}
                                                        name="Cardiopathie"
                                                        onChange={handleInputChange}
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox />}
                                                        label="Asthme"
                                                        checked={rowData.preciserIvg.includes('Asthme')}
                                                        name="Asthme"
                                                        onChange={handleInputChange}
                                                    />
                                                </FormGroup>
                                            </FormControl>
                                        </div>


                                        <TextField
                                            label="Histoire de la maladie"
                                            variant="outlined"
                                            margin="normal"
                                            style={{}}

                                            fullWidth
                                            multiline
                                            rows={2}
                                            value={rowData.histoireDeLaMaladieMere ?? ''}
                                            onChange={handleInputChange}
                                            name="histoireDeLaMaladieMere"                                   />
                                        <div>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Fraterie:
                                            </Typography>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>NbreFrere</InputLabel>
                                                <Select
                                                    value={rowData.nbreFrere|| 0}
                                                    onChange={handleInputChange}
                                                    name="nbreFrere"                                                   label="Nbre frère"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                    <MenuItem value={6}>6</MenuItem>
                                                    <MenuItem value={7}>7</MenuItem>
                                                    <MenuItem value={8}>8</MenuItem>
                                                    <MenuItem value={9}>9</MenuItem>
                                                    <MenuItem value={10}>10</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <TextField
                                                label="Antécédent Pathologique"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.atcdPatho?? ''}
                                                onChange={handleInputChange}
                                                name="atcdPatho"                                   />
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
                                                Accouchement
                                            </h5>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Date et heure d'accouchement de la mére:
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label=""
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    type="date"
                                                    fullWidth
                                                    value={rowData.dateDadmissionDeLaMereAccouchement ||''}
                                                    onChange={handleInputChange}
                                                    name="dateDadmissionDeLaMereAccouchement"
                                                />
                                                <TextField
                                                    label="Heure d'admission de la mère Accouchement"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    type="time"
                                                    fullWidth
                                                    value={rowData.heureDadmissionDeLaMereAccouchement || ''}
                                                    onChange={handleInputChange}
                                                    name="heureDadmissionDeLaMereAccouchement"
                                                />

                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Lieu accouchement</InputLabel>
                                                    <Select
                                                        value={rowData.lieuAccouchement?? ''}
                                                        onChange={handleInputChange}
                                                        name="lieuAccouchement"                                                   label="Lieu accouchement"
                                                    >
                                                        <MenuItem value="Domicile">Domicile</MenuItem>
                                                        <MenuItem value="Maternité hopital">Maternité hopital</MenuItem>
                                                        <MenuItem value="clinique privé">clinique privé</MenuItem>
                                                        <MenuItem value="Maison d'accouchement rural">Maison d'accouchement rural</MenuItem>
                                                        <MenuItem value="Autre">Autre</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Durée travail en minutes"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.dureeDeTravailAcc!== null ? rowData.dureeDeTravailAcc.toString() : ''} // Convertir l'entier en chaîne de caractères pour l'affichage
                                                    onChange={handleInputChange}
                                                    name="dureeDeTravailAcc"
                                                />
                                                <TextField
                                                    label="Presentation"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.presentationAcc ?? ''}
                                                    onChange={handleInputChange}
                                                    name="presentationAcc"                                        />
                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>RPDE</InputLabel>
                                                    <Select
                                                        value={rowData.rpdeAcc ?? ''}
                                                        onChange={handleInputChange}
                                                        label="RPDE"
                                                        name="rpdeAcc"
                                                    >
                                                        <MenuItem value="oui">oui</MenuItem>
                                                        <MenuItem value="non">non</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Liquide amniotique"
                                                    variant="outlined"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    margin="normal"

                                                    fullWidth
                                                    value={rowData.liquideAmniotiqueAcc?? ''}
                                                    onChange={handleInputChange}
                                                    name="liquideAmniotiqueAcc"                                          />
                                                <TextField
                                                    type="number"
                                                    label="T° mere accouchement"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.tMereAcc  !== null ? rowData.tMereAcc : ''}
                                                    onChange={handleInputChange}
                                                    name="tMereAcc"
                                                />

                                                <TextField
                                                    label="Surveillance foetale"
                                                    variant="outlined"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    margin="normal"

                                                    fullWidth
                                                    value={rowData.survFoetaleAccouchement?? ''}
                                                    onChange={handleInputChange}
                                                    name="survFoetaleAccouchement"                                          />
                                            </div>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Maniere d'accouchement</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-label="Voie d'accouchement"
                                                    // name="accouchement"
                                                    value={rowData.maniereAccouchement?? ''}
                                                    onChange={handleInputChange}
                                                    name="maniereAccouchement">
                                                    <FormControlLabel value="basse" control={<Radio />} label="Basse" />
                                                    <FormControlLabel value="cesarienne" control={<Radio />} label="Cesarienne" />
                                                </RadioGroup>
                                            </FormControl>
                                            <div>
                                                <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                    Cas voie basse:
                                                </Typography>
                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Type voie basse</InputLabel>
                                                    <Select
                                                        value={rowData.typeBasse?? ''}
                                                        onChange={handleInputChange}
                                                        label="typeBasse"
                                                        name="typeBasse"
                                                    >
                                                        <MenuItem value="Simple">Simple</MenuItem>
                                                        <MenuItem value="Episiotmie">Episiotmie</MenuItem>
                                                        <MenuItem value="Manoeuvre">Manoeuvre</MenuItem>
                                                        <MenuItem value="Ventouse">Ventouse</MenuItem>
                                                        <MenuItem value="Forceps">Forceps</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                    Cas cesarienne :
                                                </Typography>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <TextField
                                                        label="Indication"
                                                        variant="outlined"
                                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                                        margin="normal"
                                                        fullWidth
                                                        value={rowData.indicationCesarienne?? ''}
                                                        onChange={handleInputChange}
                                                        name="indicationCesarienne"                                            />

                                                    <TextField
                                                        label="Heure de Césarienne"
                                                        variant="outlined"
                                                        margin="normal"
                                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                                        type="time"
                                                        fullWidth
                                                        value={rowData.heureCesarienne || ''}
                                                        onChange={handleInputChange}
                                                        name="heureCesarienne"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Maturation</InputLabel>
                                                    <Select
                                                        value={rowData.maturation ?? ''}
                                                        onChange={handleInputChange}
                                                        label="Maturation"
                                                        name="maturation"
                                                    >
                                                        <MenuItem value="oui">oui</MenuItem>
                                                        <MenuItem value="non">non</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
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
                                                    backgroundColor: 'rgb(249,250,252)',
                                                    padding: '0 10px'
                                                }}
                                            >
                                                Etat du nv né a la naissance
                                            </h5>
                                            <div>
                                                <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                    ValeursAPGAR:
                                                </Typography>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Apres 1 min</InputLabel>
                                                    <Select
                                                        value={rowData.apgar1Min || 0}
                                                        onChange={handleInputChange}
                                                        name="apgar1Min"                                                 label="Apres 1 min"
                                                    >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                        <MenuItem value={7}>7</MenuItem>
                                                        <MenuItem value={8}>8</MenuItem>
                                                        <MenuItem value={9}>9</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                    </Select>

                                                </FormControl>

                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Apres 5 min</InputLabel>
                                                    <Select
                                                        value={rowData.apgar5Min || 0}
                                                        onChange={handleInputChange}
                                                        name="apgar5Min"
                                                        label="Apres 5 min"
                                                    >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                        <MenuItem value={7}>7</MenuItem>
                                                        <MenuItem value={8}>8</MenuItem>
                                                        <MenuItem value={9}>9</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                    </Select>

                                                </FormControl>

                                                <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                    <InputLabel style={{ marginTop: 'auto' }}>Apres 10 min</InputLabel>
                                                    <Select
                                                        value={rowData.apgar10Min || 0}
                                                        onChange={handleInputChange}
                                                        name="apgar10Min"
                                                        label="Apres 10 min"
                                                    >
                                                        <MenuItem value={0}>0</MenuItem>
                                                        <MenuItem value={1}>1</MenuItem>
                                                        <MenuItem value={2}>2</MenuItem>
                                                        <MenuItem value={3}>3</MenuItem>
                                                        <MenuItem value={4}>4</MenuItem>
                                                        <MenuItem value={5}>5</MenuItem>
                                                        <MenuItem value={6}>6</MenuItem>
                                                        <MenuItem value={7}>7</MenuItem>
                                                        <MenuItem value={8}>8</MenuItem>
                                                        <MenuItem value={9}>9</MenuItem>
                                                        <MenuItem value={10}>10</MenuItem>
                                                    </Select>

                                                </FormControl>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <TextField
                                                    label="Cri"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.criEnfant?? ''}
                                                    onChange={handleInputChange}
                                                    name="criEnfant"                                          />

                                                <TextField
                                                    label="Cyanose"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.cyanoseEnfant??''}
                                                    onChange={handleInputChange}
                                                    name="cyanoseEnfant"                                          />
                                            </div>

                                            <TextField
                                                label="Réanimation"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={2}
                                                value={rowData.reanimationEnfant?? ''}
                                                onChange={handleInputChange}
                                                name="reanimationEnfant"                          />
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    Mensuration a la naissance
                                </h5>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <TextField
                                        type="number"
                                        label="Poids à la naissance en Kg"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                        fullWidth
                                        value={rowData.poidsNaiss!== null ? rowData.poidsNaiss : ''}
                                        onChange={handleInputChange}
                                        name="poidsNaiss"

                                    />




                                    <TextField
                                        type="number"
                                        label="Taille à la naissance en cm"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                        fullWidth
                                        value={rowData.tailleNaiss !== null ? rowData.tailleNaiss : ''}
                                        onChange={handleInputChange}
                                        name="tailleNaiss"
                                    />


                                    <TextField
                                        type="number"
                                        label="PC à la naissance en cm"
                                        variant="outlined"
                                        margin="normal"
                                        style={{ marginLeft: '10px', marginRight: '10px' }}
                                        fullWidth
                                        value={rowData.pcNaiss !== null ? rowData.pcNaiss : ''}
                                        onChange={handleInputChange}
                                        name="pcNaiss"
                                    />


                                </div>
                            </div>
                        </div>
                    )}
                    {activeStep === 2 && (
                        <div>
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
                                                Examen de l'admission
                                            </h5>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    type="number"
                                                    label="P état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.pEtatGeneral !== null ? rowData.pEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="pEtatGeneral"
                                                />


                                                <TextField
                                                    type="number"
                                                    label="T état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.tEtatGeneral !== null ? rowData.tEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="tEtatGeneral"
                                                />


                                                <TextField
                                                    type="number"
                                                    label="PC état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.pcEtatGeneral  !== null ? rowData.pcEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="pcEtatGeneral"
                                                />


                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    type="number"
                                                    label="TRC état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.trcEtatGeneral  !== null ? rowData.trcEtatGeneral : ''}
                                                    name="trcEtatGeneral"
                                                    onChange={handleInputChange}

                                                />

                                                <TextField
                                                    type="number"
                                                    label="TA état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.taEtatGeneral !== null ? rowData.taEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="taEtatGeneral"
                                                />

                                                <TextField
                                                    type="number"
                                                    label="SAO2"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.sa2 !== null ? rowData.sa2 : ''}
                                                    onChange={handleInputChange}
                                                    name="sa2"
                                                />


                                            </div>
                                            <TextField
                                                type="number"
                                                label="DEXTRO"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}
                                                fullWidth
                                                value={rowData.dextro !== null ? rowData.dextro : ''}
                                                onChange={handleInputChange}
                                                name="dextro"
                                            />


                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    type="number"
                                                    label="FR état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.frEtatGeneral !== null ? rowData.frEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="frEtatGeneral"
                                                />


                                                <TextField
                                                    type="number"
                                                    label="FC état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.fcEtatGeneral !== null ? rowData.fcEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="fcEtatGeneral"
                                                />


                                                <TextField
                                                    type="number"
                                                    label="T° état générale"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.tempEtatGeneral !== null ? rowData.tempEtatGeneral : ''}
                                                    onChange={handleInputChange}
                                                    name="tempEtatGeneral"
                                                />


                                            </div>

                                            <div>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">Aspects</FormLabel>
                                                    <RadioGroup
                                                        row
                                                        aria-label="Aspects"
                                                        // name="aspects"
                                                        value={rowData.aspects ?? ''}
                                                        onChange={handleInputChange}
                                                        name="aspects"                                             >
                                                        <FormControlLabel value="Rose" control={<Radio />} label="Rose" />
                                                        <FormControlLabel value="Cyanose " control={<Radio />} label="Cyanose" />
                                                        <FormControlLabel value="Ictere" control={<Radio />} label="Ictere" />
                                                        <FormControlLabel value="Paleur " control={<Radio />} label="Paleur" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Organes genitaux externes</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-label="organesGenitauxExternes"
                                                    name="organesGenitauxExternes"
                                                    value={rowData.organesGenitauxExternes ?? ''}
                                                    onChange={handleInputChange}                                            >
                                                    <FormControlLabel value="Apparent" control={<Radio />} label="Apparent" />
                                                    <FormControlLabel value="Non apparent " control={<Radio />} label=" Non Apparent" />
                                                </RadioGroup>
                                            </FormControl>
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
                                                    backgroundColor: 'rgb(249,250,252)',
                                                    padding: '0 10px'
                                                }}
                                            >
                                                Examen cardio-vasculaire
                                            </h5>

                                            <FormControl component="fieldset">
                                                <FormLabel component="legend">Pouls Peripheriques (Femoraux)</FormLabel>
                                                <RadioGroup
                                                    row
                                                    aria-label="poulsPeripheriques"
                                                    name="poulsPeripheriques"
                                                    value={rowData.poulsPeripheriques ?? ''}
                                                    onChange={handleInputChange}                                            >
                                                    <FormControlLabel value="Percues" control={<Radio />} label="Percues" />
                                                    <FormControlLabel value="Non percues" control={<Radio />} label="Non percues" />
                                                </RadioGroup>
                                            </FormControl>
                                            <TextField
                                                label="Auscultation"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={rowData.auscultation?? ''}
                                                onChange={handleInputChange}
                                                name="auscultation"                                     />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            width: 'calc(50% - 10px)'
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
                                            Examen Pleuro-Pulmonaire
                                        </h5>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>BATTEMENTS DES AILES AU NEZ</InputLabel>
                                                <Select
                                                    value={rowData.battementsDesAilesAuNez || 0}
                                                    onChange={handleInputChange}
                                                    label="BATTEMENTS DES AILES AU NEZ"
                                                    name="battementsDesAilesAuNez"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br/>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>BALANCEMENT THORACO-ABDOMINAL</InputLabel>
                                                <Select
                                                    value={rowData.balancementsThoracoAbdominal || 0}
                                                    onChange={handleInputChange}
                                                    label="BALANCEMENT THORACO-ABDOMINAL"
                                                    name="balancementsThoracoAbdominal"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br/>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>TIRAGE INTERCOSTAL</InputLabel>
                                                <Select
                                                    value={rowData.tirageIntercostal || 0}
                                                    onChange={handleInputChange}
                                                    label="TIRAGE INTERCOSTAL"
                                                    name="tirageIntercostal"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>ENTONNOIR XYPHOIDIEN</InputLabel>
                                                <Select
                                                    value={rowData.entonnoirXyphoidien || 0}
                                                    onChange={handleInputChange}
                                                    label="ENTONNOIR XYPHOIDIEN"
                                                    name="entonnoirXyphoidien"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>CEIGNEMENT EXPIRATOIRE</InputLabel>
                                                <Select
                                                    value={rowData.ceignementExpiratoire|| 0}
                                                    onChange={handleInputChange}
                                                    label="CEIGNEMENT EXPIRATOIRE"
                                                    name="ceignementExpiratoire"
                                                >
                                                    <MenuItem value={0}>0</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeStep === 3 && (
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                    <div
                                        style={{
                                            border: '2px solid rgb(0,117,253)',
                                            borderRadius: '8px',
                                            padding: '10px',
                                            position: 'relative',
                                            width: 'calc(50% - 10px)'
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
                                            Examens Neurologique
                                        </h5>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <TextField
                                                label="Tonus"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.tonusExamNeurologique ?? ''}
                                                onChange={handleInputChange}
                                                name="tonusExamNeurologique"                                     />
                                            <TextField
                                                label="CRI"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.criExamNeurologique ?? ''}
                                                onChange={handleInputChange}
                                                name="criExamNeurologique"                                     />
                                            <TextField
                                                label="Conscience"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px', marginRight: '10px' }}

                                                fullWidth
                                                value={rowData.conscienceExamNeurologique ?? ''}
                                                onChange={handleInputChange}
                                                name="conscienceExamNeurologique"                                      />
                                        </div>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>MORO</InputLabel>
                                                <Select
                                                    value={rowData.moro ?? ''}
                                                    onChange={handleInputChange}
                                                    label="MORO"
                                                    name="moro"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br/>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>SUCCION</InputLabel>
                                                <Select
                                                    value={rowData.succion ?? ''}
                                                    onChange={handleInputChange}
                                                    label="SUCCION"
                                                    name="succion"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br/>
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>GRASPING</InputLabel>
                                                <Select
                                                    value={rowData.grasping ?? ''}
                                                    onChange={handleInputChange}
                                                    label="GRASPING"
                                                    name="grasping"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>POINTS CARDINAUX</InputLabel>
                                                <Select
                                                    value={rowData.pointsCardinaux ?? ''}
                                                    onChange={handleInputChange}
                                                    label="ENTONNOIR XYPHOIDIEN"
                                                    name="pointsCardinaux"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>ALLONGEMENT CROISE</InputLabel>
                                                <Select
                                                    value={rowData.allongementCroise ?? ''}
                                                    onChange={handleInputChange}
                                                    label="ALLONGEMENT CROISE"
                                                    name="allongementCroise"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <br />
                                        <div>
                                            <FormControl fullWidth variant="outlined" style={{ marginLeft: '10px', marginRight: '10px' }}>
                                                <InputLabel style={{ marginTop: 'auto' }}>MARCHE AUTOMATIQUE</InputLabel>
                                                <Select
                                                    value={rowData.marcheAutomatique ?? ''}
                                                    onChange={handleInputChange}
                                                    label="MARCHE AUTOMATIQUE"
                                                    name="marcheAutomatique"
                                                >
                                                    <MenuItem value="PRESENT">PRESENT</MenuItem>
                                                    <MenuItem value="FAIBLE">FAIBLE</MenuItem>
                                                    <MenuItem value="ABSENT">ABSENT</MenuItem>
                                                </Select>
                                            </FormControl>
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
                                                Examen Abdomino-Pelvien
                                            </h5>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="HPM"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.hpmExamAbdominoPelvien}
                                                    onChange={handleInputChange}
                                                    name="hpmExamAbdominoPelvien"                                         />
                                                <TextField
                                                    label="SMG"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.smgExamAbdominoPelvien ?? ''}
                                                    onChange={handleInputChange}
                                                    name="smgExamAbdominoPelvien"                                      />
                                                <TextField
                                                    label="Ascite"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.asciteExamAbdominoPelvien?? ''}
                                                    onChange={handleInputChange}
                                                    name="asciteExamAbdominoPelvien"
                                                />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Masse palpable"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.mpExamAbdominoPelvien ?? ''}
                                                    onChange={handleInputChange}
                                                    name="mpExamAbdominoPelvien"                                           />
                                                <TextField
                                                    label="Anomalies anales"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.aaExamAbdominoPelvien  ?? ''}
                                                    onChange={handleInputChange}
                                                    name="aaExamAbdominoPelvien"                                          />
                                                <TextField
                                                    label="Ombilic"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.ombilicExamAbdominoPelvien ?? ''}
                                                    onChange={handleInputChange}
                                                    name="ombilicExamAbdominoPelvien"
                                                />
                                            </div>
                                            <div>
                                                <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                    Meconium:
                                                </Typography>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Descriptipn"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.descMeconium ?? ''}
                                                    onChange={handleInputChange}
                                                    name="descMeconium"                                          />
                                                <TextField
                                                    label="Heure d'émission Meconium"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}                                                type="time"
                                                    fullWidth
                                                    value={rowData.heureEmissionMeconium || ''}
                                                    onChange={handleInputChange}
                                                    name="heureEmissionMeconium"
                                                />
                                                <TextField
                                                    type="number"
                                                    label="Quantité Meconium"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.qteMeconium !== null ? rowData.qteMeconium : ''}
                                                    onChange={handleInputChange}
                                                    name="qteMeconium"
                                                />


                                            </div>
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
                                                Examens Cutaneo-muqueux
                                            </h5>
                                            <TextField
                                                label="Description"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={2}
                                                value={rowData.descExamCutaneoMuqueux ?? ''}
                                                onChange={handleInputChange}
                                                name="descExamCutaneoMuqueux"                                   />
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
                                                Critere de maturité
                                            </h5>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    type="number"
                                                    label="SCORE DE DUBOWITZ"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.scoreDubowitz !== null ? rowData.scoreDubowitz : ''}
                                                    onChange={handleInputChange}
                                                    name="scoreDubowitz"
                                                />


                                                <TextField
                                                    type="number"
                                                    label="SCORE DE FARR"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.scoreFarr !== null ? rowData.scoreFarr : ''}
                                                    onChange={handleInputChange}
                                                    name="scoreFarr"
                                                />


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeStep === 4 && (
                        <div>
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

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Atresie Oesophage"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.atresieOesophage ?? ''}
                                                    onChange={handleInputChange}
                                                    name="atresieOesophage"                                           />
                                                <TextField
                                                    label="Fente Labio-palatine"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.fenteLabioPalatine ?? ''}
                                                    onChange={handleInputChange}
                                                    name="fenteLabioPalatine"                                           />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label="Atresie des choanes"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.atresieDesChoanes ?? ''}
                                                    onChange={handleInputChange}
                                                    name="atresieDesChoanes"                                         />
                                                <TextField
                                                    label="Anomalie Orthopedique"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}

                                                    fullWidth
                                                    value={rowData.anomalieOrthopedique ?? ''}
                                                    onChange={handleInputChange}
                                                    name="anomalieOrthopedique"                                          />
                                            </div>
                                            <TextField
                                                label="Autre anomalie"
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}

                                                fullWidth
                                                value={rowData.autreAnomalie ?? ''}
                                                onChange={handleInputChange}
                                                name="autreAnomalie"                                      />
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

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.diagnosticRetenues ?? ''}
                                                onChange={handleInputChange}
                                                name="diagnosticRetenues"                                       />
                                            <TextField
                                                label="Conduite a tenir"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.conduiteATenir ?? ''}
                                                onChange={handleInputChange}
                                                name="conduiteATenir"                                    />
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
                                                Surveillance clinique
                                            </h5>
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Date de surveillance clinique:
                                            </Typography>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={rowData.dateSurveillanceClinique || '' }
                                                onChange={handleInputChange}
                                                name="dateSurveillanceClinique"
                                            />

                                            <TextField
                                                label="examen complémentaire surveillance clinique"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.examenComplémentaireSurveillanceClinique ?? ''}
                                                onChange={handleInputChange}
                                                name="examenComplémentaireSurveillanceClinique"                                     />
                                            <TextField
                                                label="resultat surveillance clinique"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.resultatSurveillanceClinique ?? ''}
                                                onChange={handleInputChange}
                                                name="resultatSurveillanceClinique"                                   />
                                            <TextField
                                                label="Commentaires surveillance clinique"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.commentairesSurveillanceClinique ?? ''}
                                                onChange={handleInputChange}
                                                name="commentairesSurveillanceClinique"                                       />
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

                                                fullWidth
                                                multiline
                                                rows={8}
                                                value={rowData.conclusionCliniqueEtDiagnostiquesEvoques ?? ''}
                                                onChange={handleInputChange}
                                                name="conclusionCliniqueEtDiagnostiquesEvoques"
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
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Date de sortie:
                                            </Typography>
                                            <TextField
                                                label=""
                                                variant="outlined"
                                                margin="normal"
                                                style={{ marginLeft: '10px' }}
                                                type="date"
                                                fullWidth
                                                value={rowData.dateSortie || ''}
                                                onChange={handleInputChange}
                                                name="dateSortie"
                                            />
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Date et lieu de transfert:
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                                <TextField
                                                    label="Lieu de transfert"
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}

                                                    fullWidth
                                                    value={rowData.lieuDeTransfert}
                                                    onChange={handleInputChange}
                                                    name="lieuDeTransfert"                                         />
                                                <TextField
                                                    label=""
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}
                                                    type="date"
                                                    fullWidth
                                                    value={rowData.dateDeTransfert ||'' }
                                                    onChange={handleInputChange}
                                                    name="dateDeTransfert"
                                                />
                                            </div>
                                            <TextField
                                                label="Diagnotic de sortie"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.diagnoticDeSortie ?? ''}
                                                onChange={handleInputChange}
                                                name="diagnoticDeSortie"                                       />
                                            <Typography variant="subtitle1" component="label" sx={{ fontWeight: 'bold', color: 'gray' }}>
                                                Date et heure de deces :
                                            </Typography>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <TextField
                                                    label=""
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px' }}
                                                    type="date"
                                                    fullWidth
                                                    value={rowData.dateDeDeces || ''}
                                                    onChange={handleInputChange}
                                                    name="dateDeDeces"
                                                />
                                                <TextField
                                                    label="Heure de décès "
                                                    variant="outlined"
                                                    margin="normal"
                                                    style={{ marginLeft: '10px', marginRight: '10px' }}
                                                    fullWidth
                                                    value={rowData.heureDeDeces || ''}
                                                    onChange={handleInputChange}
                                                    name="heureDeDeces"
                                                />
                                            </div>
                                            <TextField
                                                label="Cause de decés"
                                                variant="outlined"
                                                margin="normal"
                                                style={{}}

                                                fullWidth
                                                multiline
                                                rows={1}
                                                value={rowData.causeDeDeces ?? '' }
                                                onChange={handleInputChange}
                                                name="causeDeDeces"                                       />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            position: 'relative',
                            bottom: '0',
                            width: '100%'
                        }}
                    >
                        {activeStep === 0 ? <Button disabled>Back</Button> : <Button onClick={handleBack}>Back</Button>}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={activeStep === steps.length - 1 ? handleFormSubmit : handleNext}
                            style={{ marginLeft: '10px' }}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        <Snackbar
                            open={alertOpen}
                            autoHideDuration={6000}
                            onClose={handleAlertClose}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        >
                            <Alert
                                onClose={handleAlertClose}
                                severity={alertSeverity}
                                sx={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: 'white',
                                    fontSize: '18px',
                                }}
                                iconMapping={{
                                    success: <CheckCircleIcon sx={{ color: '#2196f3' }} />, // Change la couleur de l'icône de succès en bleu (#2196f3)
                                }}
                            >
                                {alertMessage}
                            </Alert>
                        </Snackbar>
                    </div>
                </form>
            </>



        </div>
    );
};

export default ModificationPageMedecin;
