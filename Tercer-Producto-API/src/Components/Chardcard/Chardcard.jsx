import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WcIcon from '@mui/icons-material/Wc';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import GroupIcon from '@mui/icons-material/Group';
import './Chardcard.css';

const CharCard = (props) => {
  return (
    <Card id="card">
        <CardMedia
          component="img"
          image={props.img}
          alt={props.nombre}
          id="card-image"
        />
        
        <CardContent id="card-content">
          {/* Nombre del personaje */}
          <Typography gutterBottom variant="h5" component="div" id="card-title">
            {props.nombre}
          </Typography>

          {/* Raza */}
          <Typography variant="h6" id="card-subtitle">
            {props.raza}
          </Typography>

          {/* Género con icono */}
          <div id="card-info">
            <WcIcon id="card-info-icon" />
            <Typography variant="body1" id="card-info-text">{props.genero}</Typography>
          </div>

          {/* Ki y Max Ki con íconos */}
          <div id="card-grid">
            <div id="grid-item-ki">
              <FlashOnIcon id="card-info-icon-ki" />
              <Typography variant="body2" id="card-info-text">
                Ki: {props.ki}
              </Typography>
            </div>
            <div id="grid-item-max-ki">
              <FlashOnIcon id="card-info-icon-max-ki" />
              <Typography variant="body2" id="card-info-text">
                Max Ki: {props.kiMax}
              </Typography>
            </div>
          </div>

          {/* Grupo con ícono */}
          <div id="card-info-grupo">
            <GroupIcon id="card-info-icon-grupo" />
            <Typography variant="body2" id="card-info-text">
              {props.grupo}
            </Typography>
          </div>
        </CardContent>
    </Card>
  );
};

CharCard.defaultProps = {	
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____",
  raza: "_____",
  genero: "_____",
  ki: "_____",
  kiMax: "_____",
  grupo: "_____",
  link: "#"
};

export default CharCard;
