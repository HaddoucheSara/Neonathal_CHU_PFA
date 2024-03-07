


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { useGetAllUsersQuery } from "../../../services/registerApi";
import { usePatchUserMutation } from '../../../services/registerApi';
import axios from 'axios';
import { useNavigate } from 'react-router';
const ModificationPageMedecin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const { data, error, isLoading } = useGetAllUsersQuery();
  // const [patchUserMutation] = usePatchUserMutation();
  const [rowData, setRowData] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  
  useEffect(() => {
    const fetchRowData = async () => {
        try {
            // Effectuer la requête GET pour obtenir la ligne correspondante à l'aide de l'identifiant
            const response = await axios.get(`https://localhost:4430/api/users/${id}`);
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
    const modifiedRowData = { ...rowData };


    try {
      // Effectuer la requête PUT avec les données modifiées
      await axios.put(`https://localhost:4430/api/users/${id}`, modifiedRowData);
  
      // Rediriger ou effectuer d'autres actions après la modification réussie
      // ...
      setAlertMessage('Les données ont été mise à jour avec succès !');
      setAlertSeverity('success');
      setAlertOpen(true);
      navigate('/administrateur');
    } catch (error) {
      // Gérer les erreurs de la requête PUT
      // ...
      setAlertMessage("Une erreur s'est produite lors de la mise à jour du patient.");
      setAlertSeverity('error');
      setAlertOpen(true);
      console.error(error);
    }


    // if (rowData && patchUserMutation) {
    //   const { '@id': id, ...changes } = rowData;
    //   const cleanedId = parseInt(id.substring(id.lastIndexOf('/') + 1)); // Convertir l'ID en entier

    //   delete changes['@type']; // Supprimer la clé '@type'
    //   const updatedChanges = { id: cleanedId, ...changes };
  
    //   patchUserMutation(
    //     { id : cleanedId, changes: JSON.stringify(updatedChanges) }
    //   )
    //     .then(() => {
    //       console.log("id=", cleanedId);
    //       console.log("rowData = ", rowData);
    //       console.log("updatedChanges =", updatedChanges);
    //       console.log("modif reussie");
    //     })
    //     .catch((error) => {
    //       console.log("modif non reussie");
    //       console.log(error);
    //     });
    // }
  };
  
  
  
  
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  if (!rowData) {
    return <div>No data found.</div>;
  }

  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div sx={{ marginRight: 10, padding: 5 }}>
        <h1>      Modification Page Medecin</h1><br></br>
        <form onSubmit={handleFormSubmit}>
          {Object.keys(rowData).map((key) => {
            if (
              key !== '@type' &&
              key !== '@id' &&
              key !== '@context' &&
              key !== 'id'
            ) {
              return (
                <TextField
                  key={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                  value={rowData[key]}
                  onChange={handleInputChange}
                  fullWidth
                  required
                  style={{ marginBottom: '10px' }}
                />
              );
            }
            return null;
          })}
          <Button type="submit" variant="contained" color="primary">
            Enregistrer
          </Button>
        </form>
      </div>
    </div>
  );
  
  
  
};

export default ModificationPageMedecin;

