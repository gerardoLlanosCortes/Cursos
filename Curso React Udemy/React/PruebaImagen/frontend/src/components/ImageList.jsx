// ImageList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageList = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:4001");
      const data = response.data
  
      // Imprimir la estructura del objeto con JSON.stringify
      console.log("Response JSON:", JSON.stringify(response.data, null, 2));

      // Si tienes una propiedad específica que contiene la información que necesitas,
      // puedes asignarla a setImages
      setImages(data.photos);

      // Si response.data es directamente el array que necesitas, puedes hacer:
      // setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    if (images.length === 0) {
      fetchImages();
    }
  }, []); // Se ejecutará solo en la montura inicial

  return (
    <div>
      <h2>Available Images</h2>
      {console.log(images)}
      {/* {images.length > 0 ? (
        <ul>
          {images.map((filename) => (
            <img src={`https://cyclic-gold-sleepy-reindeer-us-west-1/${filename}`} key={filename} />
          ))}
        </ul>
      ) : (
        <p>No images available.</p>
      )} */}
    </div>
  );
};

export default ImageList;
