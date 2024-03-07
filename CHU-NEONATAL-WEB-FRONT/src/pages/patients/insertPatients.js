// material-ui
import { Grid, Typography } from '@mui/material';
// project import

import MultiStepForm from './InsertionFormPatient/multiStepForm';
// import { Provider } from 'react-redux';
// import store from 'store/reducers/storePatient';


// ==============================|| SAMPLE PAGE ||============================== //

// <InsertPatientTestNav1 />
const InsertPatients = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '10vh'
                    }}
                ></div>
<MultiStepForm />
                
            </Grid>
        </Grid>
    );
};
export default InsertPatients;
