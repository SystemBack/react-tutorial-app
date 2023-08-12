import { useState, useEffect } from "react";
import eventsJSON from  '../../events.json';

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(eventsJSON);
                setIsLoading(false);
            } catch ( error ) {
                setError(error);
            }
        }, 2000);
    });

    return {
        events: data?._embedded?.events || [],
        isLoading: isLoading,
        error: error,
    }
}

export default useEventsData
