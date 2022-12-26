import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';
import useUser from '../hooks/useUser';

const UserRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isUser, isUserLoading] = useUser(user?.email);

    if (loading || isUserLoading) {
        return (
            <div className="grid min-h-50v place-items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full border-sky-700 animate-spin  " />
            </div>
        );
    }

    if (user && isUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UserRoute;
