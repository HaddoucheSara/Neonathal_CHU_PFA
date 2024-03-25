import React, { useState, useEffect } from 'react';
import { useTable, useFilters } from 'react-table';

import {logout,selectUserAndToken} from "../../store/slices/authSlice";
import { useDispatch, useSelector } from 'react-redux';
import {  usePagination} from 'react-table';

import {useGetAllUsersQuery} from "../../services/registerApi";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Paper,
  Checkbox,
  ListItemText,
  Typography,
  FormControl,
  InputLabel,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  TableContainer,
  Table,
  Grid,
  Box
} from '@mui/material';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';

const TextFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <TextField
      size="small"
      value={filterValue || ''}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filtrer..."
    />
  );
};

 const AccAdmin = () => {
    const dispatch = useDispatch();  // ajouté par yassine sécurité des routes
  //   const { data: users, error, isLoading } = useGetAllUsersQuery();
  // const [rows, setRows] = useState(users?.['hydra:member'] || []);

  // useEffect(() => {
  //   if (users && !isLoading) {
  //     setRows(users['hydra:member']);
  //   }
  // }, [users, isLoading]);

  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(' http://127.0.0.1:8000/api/users')
          .then(response => response.json())
          .then(data => {
            const users = data['hydra:member'];
            setRows(users);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données de lAPI:', error);
            setIsLoading(false);
            setError(error);
          });
      }, []);



const [selectedColumns, setSelectedColumns] = useState(['lastname', 'firstname','actif', 'position', 'action']);

  useEffect(() => {
   
    const updatedColumns = columns.filter((column) =>
      selectedColumns.includes(column.accessor)
    );
    setTableColumns(updatedColumns);
  }, [selectedColumns]);

  const generatePDF = (rowData) => {
    const doc = new jsPDF();
    const lineHeight = 10;

    doc.text(`ID: ${rowData.id}`, 10, 10);
    doc.text(`EMAIL: ${rowData.email}`, 10, 10 + lineHeight);
    doc.text(`NOM: ${rowData.lastname}`, 10, 10 + lineHeight * 2);
    doc.text(`PRENOM: ${rowData.firstname}`, 10, 10 + lineHeight * 3);
    doc.text(`STATUT: ${rowData.position}`, 10, 10 + lineHeight * 4);
    // doc.text(`DATE CREATION : ${rowData.dateCreation}`, 10, 10 + lineHeight * 5);
    doc.text(`COMPTE ACTIVE : ${rowData.compteActive}`, 10, 10 + lineHeight * 5);

    const pdf = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdf);
    window.open(blobUrl, '_blank');
  };

  const handleColumnSelectChange = (event) => {
    setSelectedColumns(event.target.value);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Filter: TextFilter,
      },
      {
        Header: 'EMAIL',
        accessor: 'email',
        Filter: TextFilter,
      },
      {
        Header: 'NOM',
        accessor: 'lastname',
        Filter: TextFilter,
      },
      {
        Header: 'PRENOM',
        accessor: 'firstname',
        Filter: TextFilter,
      },
      {
        Header: 'STATUT',
        accessor: 'position',
        Filter: TextFilter,
      },
      {
        Header: 'STATUT D\'ACTIVE',
        accessor: 'actif',
        Filter: TextFilter,
      },
      {
        Header: 'ACTION',accessor: 'action',
        Filter: TextFilter,
        Cell: ({ row }) => (
          <div>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => generatePDF(row.original)}
              style={{ marginRight: '5px' }}
            >
              Generate PDF
            </Button> */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleModifier(row.original)}
              style={{ marginRight: '5px' }}
            >
              Modifier
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDesactiver(row.original)}
            >
              Désactiver
            </Button> */}
          </div>
        ),
      },
    ],
    []
  );
  const [tableColumns, setTableColumns] = useState(columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: filteredRows,
    prepareRow,
    state,
    page,
    
    
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage
} = useTable(
    {
        columns: tableColumns,
        data: rows,
        initialState: { filters: [] , pageIndex: 0, pageSize: 6}, // Initialiser les filtres à vide
    },
    useFilters,
    usePagination, // Ajoutez usePagination ici
);


  const navigate = useNavigate();

  const handleModifier = (row) => {
    console.log('handleModifier yassi');
    navigate(`/administrateur/modifier/${row.id}`);
  };
    const handleLogout = async () => {
        dispatch(logout());
        navigate('/');
    };

  const handleDesactiver = (row) => {
    console.log('handleDes yassi');
  };

  const handleAjouter = () => {
    navigate('/administrateur/register');
    console.log('click-ajouter');
  };

  return (

    <div className="dossier-rapport">
      <div className="scroll-bar">
          <br/><br/>
        <div className="scroll-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
          <div className="" style={{ textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <Button variant="contained" onClick={handleAjouter} color="primary" sx={{ marginRight: 2 }}>
                Ajouter
              </Button>
            </Box>

          </div>
            <div className="" style={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                    <Button variant="contained" onClick={handleLogout} color="secondary" sx={{ marginRight: 2 }}>
                        Se deconnecter
                    </Button>
                </Box>

            </div>
        </div>
        <div className="scroll-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
          <div className="" style={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" component="label">
              Veuillez sélectionner les informations des médecins à afficher dans le tableau :
            </Typography>
          </div>
        </div>
        <div className="scroll-bar" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px' }}>
          <div className="" style={{ textAlign: 'center' }}>
            <div className="column-toggle" style={{ display: 'flex', alignItems: 'center' }}>
              <FormControl variant="outlined" style={{ width: '200px' }}>
                <InputLabel id="info-patient-label" sx={{ fontWeight: 'bold', color: 'black' }}>
                  Info Médecin à afficher
                </InputLabel>
                <Select
                  labelId="info-patient-label"
                  multiple
                  value={selectedColumns}
                  onChange={handleColumnSelectChange}
                  renderValue={(selected) => selected.join(', ')}
                >
                  <MenuItem value="" disabled>
                    Info Patient à afficher
                  </MenuItem>
                  {columns.map((column) => (
  <MenuItem key={column.accessor} value={column.accessor}>
    <Checkbox checked={selectedColumns.includes(column.accessor) || ['NOM', 'PRENOM', 'STATUT'].includes(column.Header)} />
    <ListItemText primary={column.Header} />
  </MenuItem>
))}






                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div
          style={{
            margin: '10px',
            border: '2px solid rgb(0,117,253)',
            borderRadius: '8px',
            padding: '10px',
            position: 'relative',
          }}
        >
          <h4
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgb(249,250,252)',
              padding: '0 10px',
            }}
          >
            Liste des médecins et infirmiers
          </h4>

          <TableContainer component={Paper} sx={{ marginTop: 2, overflowX: 'auto',width: '100%' }}>
                        <Table {...getTableProps()}>
                            <TableHead>
                                {headerGroups.map((headerGroup) => (
                                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <TableCell {...column.getHeaderProps()} style={{ minWidth: '250px' }}>
                                                {column.render('Header')}
                                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHead>
                            <TableBody {...getTableBodyProps()}>
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <TableRow {...row.getRowProps()} >
                                            {row.cells.map((cell) => (
                                                <TableCell {...cell.getCellProps()} style={{ minWidth: '250px' }}>{cell.render('Cell')}</TableCell>
                                            ))}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
        </div>
        <Grid container direction="row" justifyContent="center" alignItems="center">
  <Box sx={{ flexGrow: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        style={{ marginRight: '5px' }}
      >
        Précédent
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => nextPage()}
        disabled={!canNextPage}
        style={{ marginLeft: '5px' }}
      >
        Suivant
      </Button>
    </Box>
  </Box>
</Grid>
      </div>
    </div>
  );
};

export default AccAdmin;
