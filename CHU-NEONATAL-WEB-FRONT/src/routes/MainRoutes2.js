import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute2 } from './PrivateRoute2';
import Statistique from 'pages/patients/Statistique';
import DossierRappoet from 'pages/patients/DossierRappoet';
import InsertPatients from 'pages/patients/insertPatients';



// new pages

const AccAdmin = Loadable(lazy(() => import('pages/administrateur/acceuilAdministrateur')));

const ModificationPageMedecin = Loadable(lazy(() => import('pages/auth/modifMedecin/modificationMedecin')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
// const AfficherPatient = Loadable(lazy(() => import('pages/patients/afficherPatient')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes2 = {

    //     path: '/acceuil',
    //     element: <PrivateRoute>

    //     <AccAdmin />

    // </PrivateRoute>
    // ,
//
//                      element: <AccAdmin />
//<PrivateRoute>
  //  element: <AccAdmin />
    //{' '}
//</PrivateRoute>

    path: '/administrateur',
    children: [

        {
            path: '/administrateur',
            element: <AccAdmin />
        },
        {
            path: '/administrateur/register',
            element: <AuthRegister />
        },
        {
            path: '/administrateur/modifier/:id', // Remplacez '/medecin/modifier' par le chemin souhaité
            element: <ModificationPageMedecin />
        },







        // {
        //     path: '/medecin/afficher-patient',
        //     element: <AfficherPatient />
        // }
        /*
        // ======= Template route, For reference ====== //

        {
            path: 'old/color',
            element: <Color />
        },
        {
            path: 'old/dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefaultOld />
                }
            ]
        },
        {
            path: 'old/sample-page',
            element: <SamplePage />
        },
        {
            path: 'old/shadow',
            element: <Shadow />
        },
        {
            path: 'old/typography',
            element: <Typography />
        },
        {
            path: 'old/icons/ant',
            element: <AntIcons />
        }
        */
    ]




};

export default MainRoutes2;
