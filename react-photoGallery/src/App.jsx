import images from "./store.js";
import Card from "./components/Card.jsx";
import {useState} from "react";
import Modal from "./components/Modal.jsx";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);

    const onImageClick = (clickedImage) => {
        setIsOpen(true);
        setImage(clickedImage)
    }

    return (
        <div className="container">
            <div className="cards flex">
                {images.map(image => (
                    <Card
                        key={image.id}
                        url={image.url}
                        title={image.title}
                        location={image.location}
                        description={image.description}
                        onClick={() => onImageClick(image)}
                    />
                ))}
            </div>
            {isOpen ? <Modal
                url={image.url}
                description={image.description}
                isOpen={isOpen}
            />: ''}
        </div>
    )
}

export default App
