import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import styles from './Details.module.css'


const Details = (  )  => {
    const { itemId } = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    console.log(import.meta.env)

    useEffect((  ) => {
        const fetchEventDetail = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${itemId}?apikey=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();
                console.log(data)
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        fetchEventDetail()
    }, []);

    const renderDetail = () => {
        if( error ) {
            return <h3>Something when wrong :(</h3>;
        }

        if ( isLoading ) {
            return  <h4>Loading...</h4>;
        }

        if( data?.name ) {
            return detailContent();
        } else {
            return <h4>Event not found.</h4>;
        }
    }

    const detailContent = (  ) => {
        return (
            <div className={styles.detailContainer}>
                <div className={styles.descriptionContainer}>
                    <img src={data?.images[0]?.url} alt={data.name} />
                    <h4 className={styles.eventName}>{data.name}</h4>
                    <p className={styles.eventInfo}>{data.info}</p>
                    <p className={styles.eventDate}>{format(new Date(data?.dates?.start.dateTime), 'd LLLL yyyy H:mm')} hrs</p>
                </div>

                <div className={styles.seatInfoContainer}>
                    <h4 className={styles.eventName}>Event Map</h4>
                    <img src={data.seatmap?.staticUrl} alt="Seat map event" />
                    <p className={styles.eventInfo}>{data.pleaseNote}</p>
                    <p className={styles.eventDate}>Price ranges {data.priceRanges?.[0].min} - {data.priceRanges?.[0].min} {data.priceRanges?.[0].currency}</p>
                </div>
                <a href={data.url} target="_blank" rel="noreferrer"><button type="button">Buy a ticket!</button></a>
            </div>
        );
    }

    return renderDetail();
};

export default Details;