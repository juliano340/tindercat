import React from 'react';



function CatGallery({ imageUrl, setLoading }) {
  return (
    <div className="cat-gallery">
      {imageUrl ? (
        <img src={imageUrl} alt="Gato Aleatório" onLoad={() => setLoading(false)}/>
      ) : (
        "Carregando..."
      )}
    </div>
  );
}

export default CatGallery;
