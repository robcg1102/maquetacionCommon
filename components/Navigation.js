import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="navBar">
        <div className="searchLogo">
          <a href="#" style={{width: "10%"}}>
            <img
              src="https://library.kissclipart.com/20180901/ele/kissclipart-rubber-duck-png-clipart-rubber-duck-clip-art-6e4079de63415213.png" style={{width: "90%"}}
              alt="logo"
            />
          </a>

          <TextField id="standard-basic" label="Buscar producto..." />
        </div>

        <div className="options">
          <div className="optionMenu">
            <a href="#">
              <i className="ri-user-3-fill"></i>
              <p>Mi cuenta</p>
            </a>
          </div>
          <div className="optionMenu">
            <a href="#">
              <i className="ri-heart-fill"></i>
              <p>Mis favoritos</p>
            </a>
          </div>
          <div className="optionMenu">
            <a href="#">
              <i className="ri-upload-fill"></i>
              <p>Cargar pedido masivo</p>
            </a>
          </div>
          <div className="optionMenu">
            <a href="#">
              <i className="ri-shopping-cart-2-fill"></i>
              <p>Mi carrito</p>
            </a>
          </div>
        </div>
      </div>
      <div className="barDrop">
        <div className="menuDrop">
          <div>
            <Button
              onClick={handleClick}
              style={{ color: "white" }}
            >
              Departamentos
              <i
                className="ri-arrow-drop-down-line"
                style={{ color: "white" }}
              ></i>
            </Button>
          </div>
          <div>
            <Button
              onClick={handleClick}
              style={{ color: "white" }}
            >
              Marcas
              <i
                className="ri-arrow-drop-down-line"
                style={{ color: "white" }}
              ></i>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Coflex</MenuItem>
              <MenuItem onClick={handleClose}>Phillips</MenuItem>
              <MenuItem onClick={handleClose}>Steren</MenuItem>
              <MenuItem onClick={handleClose}>Teka</MenuItem>
              <MenuItem onClick={handleClose}>Truper</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="price-tag">
          <a href="#" className="justifyText">
            <p>
              <b>OFERTAS </b>
            </p>
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1604531550/maq_img/tag_finsgj.png"
              alt="tag"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
