import '../index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selector';
import { Layout } from './Layout/Layout';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { UserPage } from 'pages/UserPage/UserPage';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { RestrictedRoute } from 'HOCs/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="main-wrapper">
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/login"
              element={
                <RestrictedRoute restricted>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute restricted>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};
