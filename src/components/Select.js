import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({setTypePokemon, getPokemons, setType2Pokemon}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, backgroundColor:'white',borderRadius: "7px",width:{xs:'100px', sm:'180px'}  }}>
        <InputLabel  id="demo-simple-select-autowidth-label">Tipo de Pokémon</InputLabel>
        <Select
          onClick={getPokemons}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Tipo de Pokémon"
        >
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value="">Todos</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value="grass">Grass</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='fire'>Fire</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='water'>Water</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='bug'>Bug</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='normal'>Normal</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='poison'>Poison</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='electric'>Electric</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='ground'>Ground</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='fairy'>Fairy</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='fighting'>Fighting</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='psychic'>Psychic</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='rock'>Rock</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='ice'>Ice</MenuItem>
          <MenuItem onClick={(e) => {setTypePokemon(e.target.dataset.value); setType2Pokemon(e.target.dataset.value)}} value='dragon'>Dragon</MenuItem>



        </Select>
      </FormControl>
    </div>
  );
}