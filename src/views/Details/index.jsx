import { Link } from "react-router-dom";
import format from "date-fns/format";
import styles from './Details.module.css'
import eventFetcher from "../../utils/fetchEvents";

const pathname = window.location.pathname
const resource = eventFetcher(pathname.substring(9, pathname.length));

const Details = ()  => {
    const data = resource.eventDetail.read();
    console.log(data);
    const renderDetail = () => {
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
                    <div>
                        <Link to='/' className={styles.home}>Home</Link>
                    </div>
                    <img src={data?.images?.[0]?.url} alt={data?.name} />
                    <h4 className={styles.eventName}>{data?.name}</h4>
                    <p className={styles.eventInfo}>{data?.info}</p>
                    <p className={styles.eventDate}>{format(new Date(data?.dates?.start.dateTime), 'd LLLL yyyy H:mm')} hrs</p>
                </div>

                <div className={styles.seatInfoContainer}>
                    <h4 className={styles.eventName}>Event Map</h4>
                    <img src={data.seatmap?.staticUrl} alt="Seat map event" />
                    <p className={styles.eventInfo}>{data?.pleaseNote}</p>
                    <p className={styles.eventDate}>Price ranges {data.priceRanges?.[0].min} - {data.priceRanges?.[0].min} {data.priceRanges?.[0].currency}</p>
                </div>
                <a href={data.url}><button type="button">Buy a ticket!</button></a>
            </div>
        );
    }

    return renderDetail();
};

export default Details;