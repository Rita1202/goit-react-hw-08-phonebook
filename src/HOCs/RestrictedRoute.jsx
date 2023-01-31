import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selector';

export const RestrictedRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  return token ? <Navigate to="/user" /> : children;
};
