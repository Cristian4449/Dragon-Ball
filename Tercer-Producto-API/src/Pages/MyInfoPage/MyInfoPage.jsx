import React from "react";
import "./MyInfoPage.css";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Button,
  CardMedia,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import backgroundImg from "./../../assets/img/CamiloHenao.jpg";
import avatar from "./../../assets/img/luffy.jpg";

const MyInfoPage = () => {
  return (
    <main id="my-info-container2">
      <Card id="my-info-card2">
        <CardMedia
          component="img"
          height="200"
          image={avatar}
          alt="Background Image"
          id="card-image2"
        />
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                alt="My Avatar"
                src={backgroundImg}
                id="my-avatar2"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Cristian Camilo Henao Varón
              </Typography>
              <Typography variant="body1" id="my-info-text2">
                Soy estudiante de Ingería de Sistemas en la Universidad de la
                Amazonia y ésta es la página de información personal y la página
                web es la entrega #3
              </Typography>
              <Button variant="contained" color="primary" id="contact-button2">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </main>
  );
};

export default MyInfoPage;
