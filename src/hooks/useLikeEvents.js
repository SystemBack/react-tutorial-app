import { set } from "date-fns";
import { useState } from "react";


const STORAGE_KEY = 'likedEvents';
const checkIsLiked = (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    return likedEvents.includes(eventId);
}

const useLikeEvents = (eventId) => {
    const [isLiked, setIsLiked] = useState(checkIsLiked(eventId));
    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const eventIndex = likedEvents.indexOf(eventId);

        if ( eventIndex !== -1 ) {
            likedEvents.splice(eventIndex, 1);
            setIsLiked(false);
        } else {
            likedEvents.push(eventId)
            setIsLiked(true)
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(likedEvents));
    }

    return {
        isLiked,
        toggleEventLike,
    }
};

export default useLikeEvents;