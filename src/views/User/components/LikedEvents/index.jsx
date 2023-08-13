import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../../../../utils/constants";
import EventItem from "../../../../components/Events/components/EventItem";
import { useNavigate } from "react-router-dom";

const LikedEvents = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleEventItemClick = (eventId) => {
        navigate(`detals/${eventId}`)
    };


    useEffect(( ) => {
        const fetchLikedEvents = async () => {
            try {
                setIsLoading(true)
                const likedEvents = JSON.parse(localStorage.getItem(STORAGE_KEY));
                const results = [];

                for(const itemId of likedEvents) {
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${itemId}?apikey=${import.meta.env.VITE_API_KEY}`);
                    const data = await response.json();

                    results.push(data);
                }

                setEvents(results);

                setIsLoading(false)
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLikedEvents();
    }, [])

    if( Object.keys(error).length > 0 ) {
        return <h3>Something when wrong :(</h3>;
    }

    if ( isLoading ) {
        return  <h4>Loading...</h4>;
    }

    return (
        <div>
            {events.map((event, index) => (
            <EventItem
                key={`event-item-${event.id}`}
                name={event.name}
                info={event.info}
                image={event.images[0].url}
                onEventClick={handleEventItemClick}
                id={event.id}
            />
            ))}
        </div>
    );
};

export default LikedEvents;