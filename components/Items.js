import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Items = (props) => {
  return (
    <div className="itemsSection">
      <h3>{props.section}</h3>
      <hr
        style={{
          width: "85%",
          margin: "auto",
          marginBottom: "7px",
          color: "#5349DB",
        }}
      />
      <div className="new_items">
        {props.items.map((item, index) => (
          <Card className="root" key={index}>
            <CardActionArea>
              <img src={item.imgsrc} alt="..." />
              <i className="ri-heart-line cardHeart"></i>
              <CardContent>
                <Typography
                  variant="body2"
                  component="p"
                  className="contentItem"
                >
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="priceTag">
              <p>${item.price.toLocaleString("en", { useGrouping: true })}</p>
              <Button size="small" color="primary">
                <i className="ri-shopping-cart-2-fill"></i> Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <p style={{ textAlign: "right", marginRight: "9%", fontSize: "20px" }}>
        <Button size="small" style={{ fontSize: "15px", color: "#5349DB" }}>
          Ver más <i className="ri-arrow-right-line"></i>
        </Button>
      </p>
    </div>
  );
};

export default Items;
