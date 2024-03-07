import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';
import MainRoutes2 from "./MainRoutes2";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([PublicRoutes, MainRoutes,MainRoutes2,LoginRoutes]);
}
