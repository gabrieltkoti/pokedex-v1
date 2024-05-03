import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PokemonCard({name, image, types}) {
  const handleTypes = () => {
    if (types[1]){
      return types[0].type.name+ ' | ' + types[1].type.name
    } return types[0].type.name
  }
  return (
    <Card sx={{ 
      maxWidth: 320,
      border: 2,
      borderRadius: 8,
      borderColor: 'black' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height='200'
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {handleTypes()}
          </Typography>
        </CardContent>  
      </CardActionArea>
    </Card>
    
  );
}