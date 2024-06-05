import PropTypes from "prop-types";
const Model = (props) => {

    const modalClasses = `modal ${props.isOpen ? '' : 'hidden'}`;
    return (
        <div id="modal" className={modalClasses}>
            <span id="close-modal">&times;</span>
            <img id="modal-img" src={props.url} alt={props.description} className="modal-content"/>
        </div>
    )
}

Model.propTypes = {
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}
export default Model;