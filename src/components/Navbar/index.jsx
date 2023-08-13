import { useState, forwardRef } from "react";
import styles from './Navbar.module.css'

const Navbar = forwardRef(({ onSearch }, ref) => {
    const[search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    }

    const handleInputKeyDown = (e) => {
        if ( e.keyCode === 13 || e.target.value === '' ) {
            onSearch(search)
        }
    }

    return (
        <div ref={ref} className={styles.searchContainer}>
            <div className={styles.searchQuestion}>
                <p>Do you want to know if some event is coming son?</p>
            </div>
            <div className={styles.searchInput}>
                <input
                    className={styles.search}
                    placeholder="Search the event."
                    onChange={handleInputChange}
                    value={search}
                    onKeyUp={handleInputKeyDown}
                />
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
