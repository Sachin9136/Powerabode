import React, { useState }  from "react";
import { Slider1 } from "../../components/Img/ImportedImage"; 


const StoryApi = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (imgSrc, title, description) => {
    setFullscreenImage({ imgSrc, title, description });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  const images = [
    { src: {Slider1}, label: 'Services', description: 'Supply Chain by SLA...', bgColor: 'bg-gray-700' },
    { src: {Slider1}, label: 'Program', description: 'Description for Program...', bgColor: 'bg-orange-500' },
    { src: {Slider1}, label: 'Academy', description: 'Description for Academy...', bgColor: 'bg-green-500' },
    { src: {Slider1}, label: 'Thinking', description: 'Description for Thinking...', bgColor: 'bg-purple-500' },
    { src: {Slider1}, label: 'Codex', description: 'Description for Codex...', bgColor: 'bg-yellow-500' },
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      {/* Image Gallery */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => openFullscreen(image.src, image.label, image.description)}
          >
            <img src={image.src} alt={`${image.label} Image`} className="w-40 h-72 object-cover rounded-lg" />
            <div className={`overlay ${image.bgColor}`}>
              {image.label}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Display */}
      {fullscreenImage && (
        <div
          id="fullscreenOverlay"
          className="fullscreen fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullscreen}
        >
          <img src={fullscreenImage.imgSrc} alt="Full Image" className="max-w-90 max-h-90 rounded-lg" />
          <div className="absolute top-10 left-10 text-white text-lg">{fullscreenImage.title}</div>
          <div className="absolute bottom-10 left-10 text-gray-300 text-sm">{fullscreenImage.description}</div>
        </div>
      )}
    </div>
  );
};

export default StoryApi;
