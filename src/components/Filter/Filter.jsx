import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selector';
import { filterContact } from 'redux/filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleSearchChange = e => dispatch(filterContact(e.target.value));
  return (
    <>
      <input
        name="filter"
        placeholder="Find contacts by name"
        onChange={handleSearchChange}
        value={filter}
        type="text"
      />
    </>
  );
};
