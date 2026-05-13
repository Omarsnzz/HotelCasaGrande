const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-header">
        <h2>¡Bienvenido!</h2>
        <p>Descubra el encanto colonial y la magia de Taxco en el Hotel Casa Grande.</p>
      </div>
      
      <div className="welcome-container">
        <div className="welcome-img">
          <img src="/img1.png" alt="Vista panorámica de Taxco" />
        </div>
        <div className="welcome-info-box">
          <h3>Un lugar cerca del cielo</h3>
          <h4>Ubicado en el encantador <strong>Pueblo Mágico de Taxco.</strong></h4>
          
          <p>Nuestro hotel está enclavado en la montaña ofreciéndoles vistas impresionantes y panorámicas de la ciudad. Taxco es reconocido por su rica tradición platera y su encanto colonial, lo cual brinda una experiencia única a todos nuestros visitantes.</p>
          
          <p>Durante su estancia en el Hotel Casa Grande, podrán disfrutar de la belleza natural y la riqueza cultural de Taxco.</p>
          
          <p>Disfruta tus vacaciones en nuestro Hotel con alberca en Taxco de Alarcón.</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;