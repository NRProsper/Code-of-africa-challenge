import images from "./store.js";
import Card from "./components/Card.jsx";
import {useEffect, useState} from "react";
import Modal from "./components/Modal.jsx";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);

    const onImageClick = (clickedImage) => {
        console.log(isOpen)
        setIsOpen(true);
        setImage(clickedImage)
        console.log(isOpen)
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal()
            }
        };

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        setImage(null);
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
                onClose={closeModal}
            />: ''}
        </div>
    )
}

export default App
