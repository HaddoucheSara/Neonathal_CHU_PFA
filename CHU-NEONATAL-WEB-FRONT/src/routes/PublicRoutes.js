// project import
import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefaultOld = Loadable(lazy(() => import('pages-old/dashboard')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const LandingPage = Loadable(lazy(() => import('pages/landingPage'))); // Remplacez 'path/to/LandingPage' par le chemin d'accès réel à votre composant LandingPage
// const AccAdmin = Loadable(lazy(() => import('pages/administrateur/acceuilAdministrateur')));
const Login = Loadable(lazy(() => import('pages/auth/login')));

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
    path: '/',
    //element: <MainLayout />,
    children: [

        {
            path: '/',
            element: <Login /> // Utilisez LandingPage comme page d'accueil accessible à tous
        },
        // {
        //     path: '/acceuil-admin',
        //     element: <AccAdmin /> // Utilisez LandingPage comme page d'accueil accessible à tous
        // },

        {
            path:'/dash',
            element:<DashboardDefaultOld/>
        }
        // ...


    ]
};

export default PublicRoutes;
