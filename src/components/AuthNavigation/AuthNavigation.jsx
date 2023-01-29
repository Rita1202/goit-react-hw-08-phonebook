import { NavLink } from 'react-router-dom';

export const AuthNavigation = () => {
  let activeStyle = {
    borderBottom: '2px solid #ff621f',
  };
  return (
    <>
      <NavLink
        className="nav-link"
        to="/register"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Registration
      </NavLink>
      <NavLink
        className="nav-link"
        to="/login"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Login
      </NavLink>
    </>
  );
};
