import { useNavigate } from 'react-router-dom';
import './styles.css';
import styles from './EventItems.module.css'
import HeartFill from '../../../../assets/heart_fill.png';
import HeartEmpty from '../../../../assets/heart_empty.png';
import useLikeEvents from '../../../../hooks/useLikeEvents';


const EventItem = ({ id, info, name, image, onEventClick }) => {
    const { isLiked, toggleEventLike } = useLikeEvents(id);
    const navigate = useNavigate();
    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id);
        navigate(`details/${id}`)
    }
    const handleHeartClick = () => {
        toggleEventLike();
    }

    return(
        <div className='item-container'>
            <div className={styles.imageContainer} >
                <img src={isLiked ? HeartFill : HeartEmpty} alt="Heart liked" className={styles.heartImage} onClick={handleHeartClick} />
                <img src={image} alt={name} width={200} height={200}/>
            </div>
            <div className='item-details'>
                <h6>{name}</h6>
                <p className='item-info'>{info}</p>
                <button onClick={handleSeeMoreClick} className='see-more'>See more</button>
            </div>
        </div>
    );
}

export default EventItem;
