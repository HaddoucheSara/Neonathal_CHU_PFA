import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import { PrivateRoute } from './PrivateRoute';
import Statistique from 'pages/patients/Statistique';
import DossierRappoet from 'pages/patients/DossierRappoet';
import InsertPatients from 'pages/patients/insertPatients';

// render - dashboard
const DashboardDefaultOld = Loadable(lazy(() => import('pages-old/dashboard')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages-old/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages-old/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages-old/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages-old/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages-old/components-overview/AntIcons')));

// new pages
const InsertPatientsPage = Loadable(lazy(() => import('pages/patients/insertPatients')));
 const DossierRappoetpage = Loadable(lazy(() => import('pages/patients/DossierRappoet')));
const ModifierPatient = Loadable(lazy(() => import('pages/patients/Statistique')));
const AccAdmin = Loadable(lazy(() => import('pages/administrateur/acceuilAdministrateur')));

const ModificationPageMedecin = Loadable(lazy(() => import('pages/auth/modifMedecin/modificationMedecin')));
const ModificationPagePatient = Loadable(lazy(() => import('pages/patients/modifierPatient/modificationPatient')));

// const AfficherPatient = Loadable(lazy(() => import('pages/patients/afficherPatient')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
     
        //     path: '/acceuil',
        //     element: <PrivateRoute>
            
        //     <AccAdmin />
           
        // </PrivateRoute>
        // ,
       
           
    path: '/medecin',
    element: (
        <PrivateRoute>
            {' '}
            <MainLayout />
        </PrivateRoute>
    ),
    children: [
        {
            path: '/medecin',
            element: <DashboardDefault />
        },
        {
            path: '/medecin/dashboard',
            children: [
                {
                    path: '/medecin/dashboard',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: '/medecin/insert-patients',
            // path: '/api/patients',
            element: <InsertPatientsPage />
        },
        {
            path: '/medecin/dossier-rapport',
            element: <DossierRappoetpage />
        },
        {
            path: '/medecin/statistique',
            element: <Statistique />
         },



        {
            path: '/medecin/modifierPatient/:id', // Remplacez '/medecin/modifier' par le chemin souhaité
            element: <ModificationPagePatient />
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

export default MainRoutes;
