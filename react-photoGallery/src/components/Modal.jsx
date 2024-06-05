import PropTypes from "prop-types";
import {useEffect} from "react";
const Model = (props) => {

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.id === 'modal') {
                props.onClose()
            }
        }
        const modal = document.getElementById('modal');
        modal.addEventListener('click', handleClick);

        return () => {
            modal.removeEventListener('click', handleClick);
        };
    }, [props.onClose]);

    const modalClasses = `modal ${props.isOpen ? 'show' : 'hidden'}`;
    return (
        <div id="modal" className={modalClasses}>
            <span id="close-modal" onClick={props.onClose}>&times;</span>
            <img id="modal-img" src={props.url} alt={props.description} className="modal-content"/>
        </div>
    )
}

Model.propTypes = {
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func
}
export default Model;