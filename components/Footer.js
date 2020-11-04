const Footer = () => {
  return (
    <div>
      <div className="brands">
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/truper_zhsgth.png"
          alt="Truper"
          style={{ height: "30px" }}
        />
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/phillips_gjenwo.png"
          alt="Phillips"
        />
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/coflex_lo9jxk.png"
          alt="Coflex"
        />
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/teka_apzohv.png"
          alt="Teka"
        />
        <img
          src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/steren_qa8ei0.png"
          alt="Steren"
          style={{ height: "50px" }}
        />
      </div>
      <div className="contact">
        <div className="cardContact">
          <h4>CONTÁCTANOS</h4>
          <div>
            <p className="justifyText leftPos">
              <i className="ri-phone-fill"></i> (555) 530 9858
            </p>
          </div>
        </div>
        <div className="cardContact">
          <h4>CONÓCENOS</h4>
          <ul>
            <a href="#">
              <li>Acerca de nosotros</li>
            </a>
            <a href="#">
              <li>Nuestro equipo</li>
            </a>
            <a href="#">
              <li>Nuestro servicio</li>
            </a>
            <a href="#">
              <li>Responsabilidad social</li>
            </a>
            <a href="#">
              <li>Atención a proveedores</li>
            </a>
          </ul>
        </div>
        <div className="cardContact">
          <h4>Compra segura</h4>
          <p>
            Aceptamos tarjetas de crédito, débito, prepago y pagos en efectivo
          </p>
          <img
            src="https://res.cloudinary.com/robcg1102/image/upload/v1604380868/maq_img/cards_swx80q.png"
            alt="cards"
          />
        </div>
      </div>
      <div className="termsRights">
        <div className="terms">
          <p>&copy; All Rights Reserved</p>
        </div>
        <div className="terms cond">
          <p>
            <a href="#">
              <u>T</u>érminos y condiciones
            </a>
          </p>
          <p>
            <a href="#">
              <u>A</u>viso de privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
