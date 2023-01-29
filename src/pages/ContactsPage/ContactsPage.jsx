import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { selectIsLoading, selectError } from 'redux/contacts/contacts-selector';
import ClipLoader from 'react-spinners/ClipLoader';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="container">
      <h1 className="heading">Phonebook</h1>

      <ContactForm />
      <h2 className="heading">Contacts</h2>
      <Filter />
      {error && <p>{error.message}</p>}

      {isLoading ? (
        <ClipLoader
          cssOverride={{ display: 'block' }}
          color="#003d83"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ContactList />
      )}
    </div>
  );
};
