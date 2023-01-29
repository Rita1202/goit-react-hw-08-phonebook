import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { name: targetName, value } }) => {
    switch (targetName) {
      case 'name':
        setName(value);
        break;
      default:
        setNumber(value);
        break;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const repeat = contacts.find(el => {
      return el.name === name;
    });

    if (repeat) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className="form-contact" onSubmit={submitHandler}>
        <input
          className="input"
          onChange={handleChange}
          value={name}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          className="input"
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="button send">Add contact</button>
      </form>
    </>
  );
};

ContactForm.popTypes = {
  handleChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};
