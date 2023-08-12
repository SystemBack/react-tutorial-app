import useEventsData from "../../hooks/useEventsData";

import EventItem from "./components/EventItem";



const Events = ({ searchTerm }) => {
    const { events, isLoading, error } = useEventsData();
     const handleEventItemClick = (e, id) => {
        console.log(id);
    }
    const renderEvents = () => {
        let eventsFiltered = events;

        if ( searchTerm.length > 0 ) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                id={eventItem.id}
            />
        ));
    }

    if(error) {
        return <h3>Something when wrong :(</h3>
    }

    if(isLoading) {
        return <h4>Loading...</h4>
    }

    return(
        <div>
            <h1>
                Events
                {renderEvents()}
            </h1>
        </div>
    );
}

export default Events;
