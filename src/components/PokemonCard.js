import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea  } from '@mui/material';
import { Box } from '@mui/system';

export default function PokemonCard({name, image, types, pokemon}) {


const background = () =>{
if(pokemon === 'grass'){
  return 'linear-gradient(231deg, rgba(24,36,0,1) 1%, rgba(18,133,41,1) 30%, rgba(0,255,149,1) 100%)'
}
if(pokemon === 'fire'){
  return 'linear-gradient(45deg, rgba(164,164,164,1) 1%, rgba(255,0,0,1) 50%, rgba(130,130,130,1) 100%)'
}
if(pokemon === 'water'){
  return 'linear-gradient(45deg, rgba(189,232,252,1) 0%, rgba(0,31,255,1) 50%, rgba(187,172,231,1) 100%)'
}
if(pokemon === 'bug'){
  return 'linear-gradient(130deg, rgba(100,112,86,1) 0%, rgba(74,255,0,1) 50%, rgba(48,162,65,1) 100%)'
}
if(pokemon === 'poison'){
  return 'linear-gradient(150deg, rgba(196,205,187,1) 0%, rgba(138,43,226,1) 50%, rgba(51,51,51,1) 100%)'
}
if(pokemon === 'psychic'){
  return 'linear-gradient(227deg, rgba(180,180,180,1) 0%, rgba(255,247,150,1) 50%, rgba(255,247,247,1) 100%)'
}
if(pokemon === 'rock'){
  return 'linear-gradient(300deg, rgba(22,22,22,1) 0%, rgba(124,119,126,1) 55%, rgba(37,35,35,1) 100%)'
}
if(pokemon === 'ghost'){
  return 'linear-gradient(227deg, rgba(22,22,22,1) 0%, rgba(102,51,153,1) 55%, rgba(37,35,35,1) 100%)'
}
if(pokemon === 'electric'){
  return 'linear-gradient(130deg, rgba(180,180,180,1) 0%, rgba(255,224,56,1) 50%, rgba(255,247,247,1) 100%)'
}
if(pokemon === 'ground'){
  return 'linear-gradient(227deg, rgba(0,0,0,1) 0%, rgba(222,184,135,1) 50%, rgba(255,255,255,1) 100%)'
}
if(pokemon === 'fighting'){
  return 'linear-gradient(227deg, rgba(22,22,22,1) 0%, rgba(161,148,175,1) 50%, rgba(37,35,35,1) 100%)'
}
if(pokemon === 'ice'){
  return 'linear-gradient(227deg, rgba(161,230,231,1) 0%, rgba(153,208,236,1) 25%, rgba(255,255,255,1) 100%)'
}
if(pokemon === 'dragon'){
  return 'linear-gradient(227deg, rgba(87,87,87,1) 0%, rgba(200,195,193,1) 50%, rgba(69,69,69,1) 100%)'
}
if(pokemon === 'normal'){
  return 'linear-gradient(130deg, rgba(46,48,44,1) 0%, rgba(128,128,128,1) 50%, rgba(51,51,51,1) 100%)'
}
if(pokemon === 'fairy'){
  return 'linear-gradient(270deg, rgba(249,249,249,1) 0%, rgba(255,211,240,1) 50%, rgba(181,175,175,1) 100%)'
}
return 'white'
}
const typeHandler = () =>{
if(types[1]){
  return types[0].type.name + ' | ' + types[1].type.name
}
return types[0].type.name
}

  return (
    <Card sx={{ maxWidth: 345,boxShadow:'7px 7px 20px black', border: '2px solid black', padding:'0', margin: 'auto', background: background()}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
        />
        <CardContent>
          <Box display='flex' justifyContent='space-between' alignItems= 'center' >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {typeHandler()}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}