import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

export const RestrictedRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};
