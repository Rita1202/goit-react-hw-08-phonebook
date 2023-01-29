import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { registation } from 'redux/auth/auth-operations';
import { useState } from 'react';
import css from './RegistForm.module.css';

export const RegistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
    dispatch(registation({ name, email, password }));
    setEmail('');
    setPass('');
    setName('');
  };

  return (
    <form onSubmit={e => onSubmitHandler(e)} className="decor">
      <div className={css.formLeftDecoration}></div>
      <div className={css.formRightDecoration}></div>
      <div className={css.circle}></div>
      <div className={css.formInner}>
        <h1 className="heading">Join us</h1>
        <input
          onChange={e => onChangeHandler(e)}
          name="name"
          value={name}
          placeholder="Name"
          className={css.input}
        />
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
        <button className="button send">Registration</button>
        <Link to="/login" className="link">
          I already have my account
        </Link>
      </div>
    </form>
  );
};
