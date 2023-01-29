import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectAuthToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/user" /> : children;
};
