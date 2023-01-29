import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  return token ? children : <Navigate to="/login" />;
};
