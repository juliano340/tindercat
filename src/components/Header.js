import React from 'react';
import './Header.css';

const Header = ({ activeTab, onTabChange }) => {
  return (
    <div className="header">
      <div
        className={`header-item ${activeTab === "descoberta" ? "active" : ""}`}
        onClick={() => onTabChange("descoberta")}
      >
        <img src="descobrir.png" alt="Descoberta" />
        {activeTab === "descoberta" && <span>Descoberta</span>}
        
      </div>

      <div
        className={`header-item ${activeTab === "salvos" ? "active" : ""}`}
        onClick={() => onTabChange("salvos")}
      >
        {activeTab === "salvos" && <span>Salvos</span>}
        <img src="salvos.png" alt="Salvos" />
        
      </div>
    </div>
  );
}

export default Header;
