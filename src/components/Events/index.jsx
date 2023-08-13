import EventItem from "./components/EventItem";
import { memo } from "react";


const Events = ({ searchTerm, events }) => {
     const handleEventItemClick = (e, id) => {
        console.log(id);
    }
    const renderItems = () => {
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

    return(
        <div>
            <h1>
                Events
                { renderItems() }
            </h1>
        </div>
    );
}

export default memo(Events) ;
