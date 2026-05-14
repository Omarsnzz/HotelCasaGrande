import React from 'react';

const PageBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="page-banner" 
      style={{ 
        // El gradiente oscuro permite que las letras blancas siempre se lean bien
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${backgroundImage}')` 
      }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;