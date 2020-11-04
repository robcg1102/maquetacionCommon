import Container from "../components/Container";
import CarouselComp from "../components/Carousel";
import Items from "../components/Items";
import Footer from "../components/Footer";

import dataService from "../services/data";

const Index = () => {
  const { newItems, topSelling, itemsCarousel } = dataService;

  return (
    <Container title="Home">
      <CarouselComp items={itemsCarousel} />
      <Items items={newItems} section="Nuevos productos" />
      <div className="guarantee">
        <div className="cardGuarantee">
          <p>
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/envios_q0wcb4.png"
              alt="envios"
            />
          </p>
          <h4>Envíos y devoluciones</h4>
          <p>Entrega garantizada en máximo de 48 horas.</p>
        </div>
        <div className="cardGuarantee">
          <p>
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604355701/maq_img/devolucion_m5gbfk.png"
              alt="garantia"
            />
          </p>
          <h4>Garantía de devolución</h4>
          <p>Clientes 100% satisfechos.</p>
        </div>
        <div className="cardGuarantee">
          <p>
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604355700/maq_img/clientes_vjedk8.png"
              alt="satisfechos"
            />
          </p>
          <h4>Clientes satisfechos</h4>
          <p>Ofrecemos la mejor variedad de productos.</p>
        </div>
      </div>
      <Items items={topSelling} section="Más vendidos" />
      <Footer />
    </Container>
  );
};

export default Index;
