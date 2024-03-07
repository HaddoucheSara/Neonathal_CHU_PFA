
import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from 'store/slices/authSlice';
import { Navigate } from 'react-router-dom';

 import { useNavigate } from 'react-router-dom';

// render - login
const AuthLoginOld = Loadable(lazy(() => import('pages-old/authentication/Login')));
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthRegisterModif = Loadable(lazy(() => import('pages/auth/modifMedecin/modificationMedecin')));
const AuthRegisterOld = Loadable(lazy(() => import('pages-old/authentication/Register')));
const AccAdmin = Loadable(lazy(() => import('pages/administrateur/acceuilAdministrateur')));

function AlreadyLoggedIn({ children }) {
    const { user, token } = useSelector(selectUserAndToken);
    const navigate = useNavigate();
    if (user && user?.email === 'assistant@chu.com' && token) {
        // user with email 'assistant@chu.com' is logged in, redirect to AccAdmin

        return <Navigate to="/medecin/acceuil" replace />;

      }else{
         if (user && user.firstname && token) {
        // already logged in so redirect to dashboard
        return navigate('/medecin') ;
    }
      }
   

   

    // Not logged in so return child components
    return children;
}

// ==============================|| AUTH ROUTING ||============================== //
const LoginRoutes = {
//     path: '/acceuil',
//     element: 
//     <AlreadyLoggedIn>
//             <AccAdmin />
//         </AlreadyLoggedIn>
    
   
// ,
//     path: '/medecin',
    element: (
        <AlreadyLoggedIn>
            <MinimalLayout />
        </AlreadyLoggedIn>
    ),
    children: [
        {
            path: '/medecin/login',
            element: <AuthLogin />
        },
        {
            path: '/medecin/register',
            element: <AuthRegister />
        },

        // ======= Template route, For reference ====== //
        {
            path: '/medecin/login-old',
            element: <AuthLoginOld />
        },
        {
            path: '/medecin/register-old',
            element: <AuthRegisterOld />
        }
    ]
};

export default LoginRoutes;







// import { lazy } from 'react';

// // project import
// import Loadable from 'components/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';
// import { useSelector } from 'react-redux';
// import { selectUserAndToken } from 'store/slices/authSlice';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// // render - login
// const AuthLoginOld = Loadable(lazy(() => import('pages-old/authentication/Login')));
// const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
// const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
// const AuthRegisterOld = Loadable(lazy(() => import('pages-old/authentication/Register')));
// const AccAdmin = Loadable(lazy(() => import('pages/administrateur/acceuilAdministrateur')));
// function AlreadyLoggedIn({ children }) {
//     const { user, token } = useSelector(selectUserAndToken);
//     if (user && user.firstname && token) {
//         // already logged in so redirect to dashboard
//         return <Navigate to="/medecin" replace />;
//     }

//     // Not logged in so return child components
//     return children;
// }

// // ==============================|| AUTH ROUTING ||============================== //
// const LoginRoutes = {
//     path: '/medecin',
//     element: (
//         <AlreadyLoggedIn>
//             <MinimalLayout />
//         </AlreadyLoggedIn>
//     ),
//     children: [
//         {
//             path: '/medecin/login',
//             element: <AuthLogin />
//         },
//         {
//             path: '/medecin/register',
//             element: <AuthRegister />
//         },
       
//         // ======= Template route, For reference ====== //
//         {
//             path: '/medecin/login-old',
//             element: <AuthLoginOld />
//         },
//         {
//             path: '/medecin/register-old',
//             element: <AuthRegisterOld />
//         }
//     ]
// };

// export default LoginRoutes;
