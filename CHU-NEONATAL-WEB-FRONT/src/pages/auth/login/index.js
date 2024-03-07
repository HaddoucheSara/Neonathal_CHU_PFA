import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './AuthLogin';
import AuthWrapper from '../AuthWrapper';
import UMPOLogo from './UMPOLogo.png';
import miaLogo from './miaLogo.png';
import logo from './logo.png'
import  './stylesConnexion.css'

// ================================|| LOGIN ||================================ //

const Login = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <img src={UMPOLogo} alt="Description de l'image 1"  className="image" />
                    <img src={logo} alt="Description de l'image 1"  className="another-image" />
                    <img src={miaLogo} alt="Description de l'image 2"  className="another-image"/>


                    {/* <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Vous n'avez pas de compte ?
                    </Typography> */}
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">Connexion</Typography>
                <AuthLogin />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default Login;
