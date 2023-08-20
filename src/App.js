import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import CatGallery from './components/CatGallery';
import CatActions from './components/CatActions';
import SavedCats from "./components/SavedCats";
import Footer from './components/Footer';
import Preloader from './components/Preloader'


function App() {

  const [showSplash, setShowSplash] = useState(true);

  const appStyle = showSplash ? { backgroundColor: '#E74646', height: '100vh' } : {
    backgroundColor: '#e6ede3',
    justifyContent: 'flex-start',

  };

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false)
      }, 3000);
    }
  }, [showSplash]);

  const [activeTab, setActiveTab] = useState("descoberta")
  const [catImage, setCatImage] = useState(null);
  // const [savedCats, setSavedCats] = useState([]);

  const [loading, setLoading] = useState(false);



  const [savedCats, setSavedCats] = useState(() => {
    const saved = localStorage.getItem('savedCats');
    return saved ? JSON.parse(saved) : [];
  });

  const fetchNewCatImage = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();

      if (data.length > 0 && data[0].url) {
        setCatImage(data[0].url);
        setLoading(false);    // Desative o preloader aqui, depois que a imagem for carregada
      }
    } catch (error) {
      console.error("Erro ao carregar imagem:", error);
      setLoading(false); // Também desative o preloader aqui em caso de erro
    }
  };



  useEffect(() => {
    fetchNewCatImage();
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCats', JSON.stringify(savedCats));
  }, [savedCats]);


  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleDislike = () => {
    setLoading(true);
    fetchNewCatImage();
  };

  const handleLike = () => {
    if (catImage) {
      setSavedCats(prevSavedCats => [...prevSavedCats, catImage]);
      fetchNewCatImage();
    }
  };


  const handleRemoveSavedCat = (indexToRemove) => {
    setSavedCats((prevSavedCats) =>
      prevSavedCats.filter((_, index) => index !== indexToRemove)
    );
  };



  //PARTE VISUAL 
  return (



    <div className="App" style={appStyle}>
     


      {showSplash ? (

        <div>
          <img src="Logo.png" alt="TinderCat Logo" />
        </div>

      ) : (

        <>

          <Header activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "descoberta" ? (
            <>
              <CatGallery imageUrl={catImage} setLoading={setLoading} />
              <CatActions onDislike={handleDislike} onLike={handleLike} />

              <Footer />
            </>
          ) : (
            <>
              <SavedCats savedCats={savedCats} onRemove={handleRemoveSavedCat} />
              <Footer />
            </>
          )}

        </>



      )}

    </div>
  )

}

export default App;