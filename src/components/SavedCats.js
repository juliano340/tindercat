import React from 'react';
import './SavedCats.css';

function SavedCats({ savedCats, onRemove }) {

    if (savedCats.length === 0) {
        return <div className="no-saved-cats">Você ainda não salvou nenhum gato. 😿</div>;
    }
    return (
        <div className="saved-cats-container">

            {savedCats.map((imgUrl, index) => (
                <div key={index} className="saved-cat-card">
                    <button className="remove-btn" onClick={() => onRemove(index)}>
                        X
                    </button>
                    <img src={imgUrl} alt={`Gato Salvo ${index}`} />
                </div>
            ))}

        </div>
    );
}

export default SavedCats;
