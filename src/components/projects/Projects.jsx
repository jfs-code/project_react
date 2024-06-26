import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import MainImage from './MainImage';
import Details from './Details';
import Modal from './Modal';
import './css/Projects.css';

const images = [
    '/imgs/svg.svg',
    '/imgs/svg_1.svg',
    '/imgs/svg_2.svg',
    '/imgs/svg_3.svg',
    '/imgs/svg_4.svg',
    '/imgs/svg_5.svg',
    '/imgs/svg_3.svg',
    '/imgs/svg_4.svg',
    '/imgs/svg_5.svg',
  ];

  const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleButtonClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="Projects-container">
            <div className="right-container">
                <div className="left-container">
                    <MainImage src={selectedImage} />
                    <ImageCarousel images={images} onImageClick={handleImageClick} />
                </div>
                <div className="text-container">
                    <Details
                        title="Product Title"
                        description="This is a description of the product."
                        onButtonClick={handleButtonClick}
                    />
                </div>
            </div>
            <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
        </div>
    );
};

export default Projects;