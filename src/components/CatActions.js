import React, { useState } from 'react';
import './CatActions.css';

function CatActions({ onDislike, onLike }) {
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);

  const handleDislikeClick = () => {
    setIsDislikeClicked(true);
    setTimeout(() => setIsDislikeClicked(false), 300);  // reset após 300ms
    onDislike();
  };

  const handleLikeClick = () => {
    setIsLikeClicked(true);
    setTimeout(() => setIsLikeClicked(false), 300);  // reset após 300ms
    onLike();
  };

  return (
    <div className="cat-actions">
      <button 
        className={`btn-dislike ${isDislikeClicked ? 'clicked' : ''}`} 
        onClick={handleDislikeClick}
      >
        <img src="nao-gosto.png" alt="Não Curtir" />
      </button>
      <button 
        className={`btn-like ${isLikeClicked ? 'clicked' : ''}`} 
        onClick={handleLikeClick}
      >
        <img src="gostar.png" alt="Curtir" />
      </button>
    </div>
  );
}

export default CatActions;
