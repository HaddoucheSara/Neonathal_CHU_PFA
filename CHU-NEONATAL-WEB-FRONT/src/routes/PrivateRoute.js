import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserAndToken } from 'store/slices/authSlice';

function PrivateRoute({ children }) {

    const { user, token } = useSelector(selectUserAndToken);
    console.log(user.email);
    console.log(token);
    if (!user || !token || user.email=='assistant@chu.com') {

        // not logged in so redirect to login page
        //return <Navigate to="/medecin/login" replace />;
        return <Navigate to="/" replace />;
    }

    // authorized so return child components
    return children;
}

export { PrivateRoute };
