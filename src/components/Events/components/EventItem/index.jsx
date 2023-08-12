import './styles.css';

const EventItem = ({ id, info, name, image, onEventClick }) => {

    const handleSeeMoreClick = (e) => {
        e.stopPropagation();
        onEventClick(id);
    }

    return(
        <div className='item-container'>
            <img src={image} alt={name} width={200} height={200}/>
            <div className='item-details'>
                <h6>{name}</h6>
                <p className='item-info'>{info}</p>
                <button  onClick={handleSeeMoreClick} className='see-more'>See more</button>
            </div>
        </div>
    );
}

export default EventItem;
