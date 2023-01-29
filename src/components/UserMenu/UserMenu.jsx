import { selectAuthUser } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div className={css.decor}>
      <div className={css.userInfo}>
        <p className="contact">{user.name}</p>
        <p className="contact">{user.email}</p>
        <button
          className={css.button}
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
