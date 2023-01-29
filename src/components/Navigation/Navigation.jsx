import { NavLink } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';

export const Navigation = () => {
  let activeStyle = {
    borderBottom: '2px solid #ff621f',
  };

  const token = useSelector(selectAuthToken);
  console.log(token);

  return (
    <nav className="nav">
      <ul className="nav-list">
        {token && (
          <NavLink
            className="nav-link"
            to="/contacts"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacts
          </NavLink>
        )}
        {token ? (
          <NavLink
            to="user"
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            User
          </NavLink>
        ) : (
          <AuthNavigation />
        )}
      </ul>
    </nav>
  );
};
