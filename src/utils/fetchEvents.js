import wrapPromise from "./wrapPromise";

const fetchEventDetail = async (itemId) => {
    try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${itemId}?apikey=${import.meta.env.VITE_API_KEY}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchData = (eventId) => {
    return {
        eventDetail: wrapPromise(fetchEventDetail(eventId)),
    };
}

export default fetchData;
