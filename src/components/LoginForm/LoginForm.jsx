import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      default:
        setPass(e.target.value);
        break;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPass('');
  };

  return (
    <form onSubmit={e => onSubmitHandler(e)} className="decor">
      <div className={css.formLeftDecoration}></div>
      <div className={css.formRightDecoration}></div>
      <div className={css.circle}></div>
      <div className={css.formInner}>
        <h1 className="heading">AUTHORIZATION</h1>

        <input
          onChange={event => onChangeHandler(event)}
          name="email"
          value={email}
          placeholder="E-mail"
          className={css.input}
        />

        <input
          onChange={event => onChangeHandler(event)}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          className={css.input}
        />
        <button className="button send">Log in</button>
        <Link to="/register" className="link">
          I don't have an account
        </Link>
      </div>
    </form>
  );
};
