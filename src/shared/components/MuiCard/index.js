import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const MuiCard = ({ image, name, details, onClick }) => {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 8, textAlign: "center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={onClick}
          variant="contained"
          size="small"
          color="warning"
        >
          Sil
        </Button>
      </CardActions>
    </Card>
  );
};
export default MuiCard;
