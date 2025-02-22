// components/ImageCarousel.jsx
import { useState, useEffect } from 'react';

const ImageCarousel = ({ folder, direction }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      try {
        let imageContext;
        if (folder === 'carousel') {
          imageContext = import.meta.glob('/public/images/carousel/*');
        } else if (folder === 'inverse') {
          imageContext = import.meta.glob('/public/images/inverse/*');
        } else {
          throw new Error('Invalid folder');
        }

        const imageNames = Object.keys(imageContext).map(path => 
          path.replace('/public', '')
        );
        setImages(imageNames);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    importImages();
  }, [folder]);

  return (
    <div className="relative overflow-hidden w-full mb-8">
      <div className={`flex ${direction === 'right' ? 'animate-carousel-reverse' : 'animate-carousel'}`}>
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel image ${index + 1}`}
            className="h-[250px] w-auto object-contain mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;