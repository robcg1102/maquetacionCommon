import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function CarouselComp(props) {
  var items = props.items;

  return (
    <Carousel indicators={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper className="carouselBar">
      <div className="contentCarousel">
        <p className="contentText">{props.item.description}</p>
      </div>
      <img src={props.item.imgsrc} alt={props.item.name} />
    </Paper>
  );
}

export default CarouselComp;
