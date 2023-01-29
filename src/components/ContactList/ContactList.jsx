import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterItem = useSelector(getFilter);
  const dispatch = useDispatch();

  const renderContacts = () =>
    contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filterItem.trim().toLowerCase());
    });

  const list = renderContacts();

  return (
    <>
      <ul className="contacts-list">
        {list.map(({ id, number, name }) => {
          return (
            <li key={id} className="contact">
              <div>
                {name}: {number}
              </div>
              <button
                className="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   deleteUser: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
