
import PropTypes from "prop-types";
const Card = (props) => (
    <div className="card" onClick={props.onClick}>
        <img src={props.url} alt={props.description}/>
        <div className="text-content">
            <div className="top">
                <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1>
                <p className="location">{props.location}</p>
            </div>
            <div className="bottom">
                <a href="#" className="read-more">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
)

Card.propTypes = {
    url: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    onClick: PropTypes.func
}


export default Card;