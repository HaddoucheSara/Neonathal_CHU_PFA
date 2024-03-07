import React from 'react';
import { Button, Typography, Toolbar, AppBar, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate();

    const handleMedecinLogin = () => {
        navigate('/medecin/login');
    };

    const handleAdminLogin = () => {
        navigate('/acceuil-admin');
    };

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src="logo.png" alt="Logo" style={{ height: 40, marginRight: 10 }} />
                            Service Néonatal - CHU Oujda
                        </Typography>
                        <Button color="inherit" onClick={handleAdminLogin}>Se connecter en tant qu'administrateur</Button>
                        <Button color="inherit" onClick={handleMedecinLogin}>
                            Se connecter en tant que médecin
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="sm" sx={{ mt: 4 }}>
                    <Typography variant="h4" component="h1" align="center" sx={{ mt: 4 }}>
                        Bienvenue au Service Néonatal du CHU Oujda
                    </Typography>
                    <Typography variant="body1" component="p" align="center" sx={{ mt: 2 }}>
                        Nous sommes dédiés à fournir des soins de qualité aux nouveau-nés et aux nourrissons, ainsi qu'un soutien aux
                        parents.
                    </Typography>
                    <Typography variant="body1" component="p" align="center" sx={{ mt: 2 }}>
                        Que vous soyez un médecin cherchant à accéder aux dossiers médicaux ou un administrateur gérant les autorisations,
                        veuillez sélectionner l'option appropriée ci-dessus pour vous connecter.
                    </Typography>
                </Container>
            </div>
        </div>
    );
};

export default LandingPage;
