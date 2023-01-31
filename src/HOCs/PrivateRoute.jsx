import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthToken,
  selectIsFetchingCurrentUser,
} from 'redux/auth/auth-selector';

export const PrivateRoute = ({ children }) => {
  const token = useSelector(selectAuthToken);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  // const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !token && !isFetchingCurrentUser;
  return shouldRedirect ? <Navigate to="/login" /> : children;
};
