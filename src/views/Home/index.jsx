import { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import useEventsData from "../../hooks/useEventsData";
import styles from './home.module.css'


const Home = (  ) => {
    const { events, isLoading, error, fetchEvents, page } = useEventsData();
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef();
    useEffect( (  ) => {
        fetchEvents();
    }, []);

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`);
    }

    const handlePageChange = ( page ) => {
        fetchEvents(`&keyword=${searchTerm}&page=${page.selected}`)
    }

    const renderEvents = () =>  {
        if( error ) {
            return <h3>Something when wrong :(</h3>;
        }

        if ( isLoading ) {
            return  <h4>Loading...</h4>;
        }

        if( events.length > 0 ) {
            return (
                <div>
                    <Events searchTerm={searchTerm} events={events} />
                    <ReactPaginate
                        className={styles.paginator}
                        nextLinkClassName={styles.next}
                        previousClassName={styles.previous}
                        pageClassName={styles.page}
                        activeLinkClassName={styles.activePage}
                        disabledClassName={styles.disabledPage}
                        breakLabel="..."
                        nextLabel=">"
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        pageCount={page.totalPages}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </div>
            );
        } else {
            return <h4>Events not found.</h4>;
        }
    }


    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            { renderEvents() }
        </>
    );
};

export default Home;