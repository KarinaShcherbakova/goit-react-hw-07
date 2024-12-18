import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css'; 

const selectFilter = (state) => state.filters.name;

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter); 

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter} 
        onChange={handleFilterChange} 
        className={styles.searchInput} 
      />
    </div>
  );
};

export default SearchBox;