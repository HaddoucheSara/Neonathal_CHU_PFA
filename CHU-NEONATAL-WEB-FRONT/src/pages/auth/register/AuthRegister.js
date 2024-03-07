import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useTable, useFilters , usePagination} from 'react-table';
// material-ui
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import { Select } from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useRegisterMutation } from 'services/registerApi';
import { dispatch } from 'store';
import {register,selectUserAndToken} from "../../../store/slices/authSlice";

import { useDispatch, useSelector } from 'react-redux';




// ============================|| REGISTER ||============================ //
const AuthRegister = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [registerMutation, { isSuccess, isLoading, isError, error, data }] = useRegisterMutation();
    const dispatch = useDispatch();
    //const { user } = useSelector(selectUserAndToken);// securité des liens
    //console.log(user.email);// securité des liens

    
    const [level, setLevel] = useState();
    
   useEffect(() => {
        //ajoter par mr Jabri
        if (isSuccess) {
            dispatch(register(data));
            navigate('/administrateur');
        }
    }, [isSuccess, data]);
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };
 

    return (
        <>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    position: '',
                    actif:'',
                    email: '',
                    plainPassword: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string().max(255).required('Le prénom est requis'),
                    lastname: Yup.string().max(255).required('Le nom est requis'),
                    position: Yup.string().max(255).required('Le poste est requis'),
                    actif: Yup.string().max(255).required('Le statut d\'activité est requis'),

                    email: Yup.string().email('Doit être un email valide').max(255).required('L\'e-mail est requis'),
                    plainPassword: Yup.string().max(255).required('Mot de passe requis')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await registerMutation({ body: values });
                        console.log('na debut');


                        console.log(user)

                        console.log(user.email)
                        navigate('/administrateur');
                        console.log('na fin');
                        setStatus({ success: true });
                        setSubmitting(false);
                        console.log("ok")


                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        navigate('/administrateur');
                        setSubmitting(false);
                        console.log("ko")

                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstname-signup">Prénom*</InputLabel>
                                    <OutlinedInput
                                        id="firstname-login"
                                        type="firstname"
                                        value={values.firstname}
                                        name="firstname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Prénom"
                                        fullWidth
                                        error={Boolean(touched.firstname && errors.firstname)}
                                    />
                                    {touched.firstname && errors.firstname && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.firstname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="lastname-signup">Nom*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.lastname && errors.lastname)}
                                        id="lastname-signup"
                                        type="lastname"
                                        value={values.lastname}
                                        name="lastname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Nom"
                                        inputProps={{}}
                                    />
                                    {touched.lastname && errors.lastname && (
                                        <FormHelperText error id="helper-text-lastname-signup">
                                            {errors.lastname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="position-signup">Poste*</InputLabel>
                                    <Select
                                        fullWidth
                                        id="position-signup"
                                        native
                                        value={values.position}
                                        name="position"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    >
                                        <option value="">Sélectionner le poste</option>
                                        <option value="Chef de service">Chef de service</option>
                                        <option value="Professeur agrégé">Professeur agrégé</option>
                                        <option value="Professeur assistant">Professeur assistant</option>
                                        <option value="Infirmier chef">Infirmier chef</option>
                                        <option value="Médecin résident">Médecin résident</option>
                                        <option value="Médecin interne">Médecin interne</option>
                                    </Select>
                                    
                                    {/* <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.position && errors.position)}
                                        id="position-signup"
                                        type="position"
                                        value={values.position}
                                        name="position"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Poste"
                                        inputProps={{}}
                                    /> */}
                                    {touched.position && errors.position && (
                                        <FormHelperText error id="helper-text-position-signup">
                                            {errors.position}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="actif-signup">Actif*</InputLabel>
                                    <Select
                                        fullWidth
                                        id="actif-signup"
                                        native
                                        value={values.actif}
                                        name="actif"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    >
                                        <option value="">Sélectionner le statut d'activité du Médecin</option>
                                       
                                        <option value="Actif">Actif</option>
                                        <option value="Non actif">Non actif</option>
                                    </Select>
                                    
                                  
                                    {touched.position && errors.position && (
                                        <FormHelperText error id="helper-text-actif-signup">
                                            {errors.actif}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">Adresse e-mail*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Entrer l'adresse e-mail"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">Mot de passe</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.plainPassword && errors.plainPassword)}
                                        id="password-signup"
                                        type={showPassword ? 'text' : 'plainPassword'}
                                        value={values.plainPassword}
                                        name="plainPassword"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.plainPassword && errors.plainPassword && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.plainPassword}
                                        </FormHelperText>
                                    )}
                                </Stack>
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Create Account
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthRegister;