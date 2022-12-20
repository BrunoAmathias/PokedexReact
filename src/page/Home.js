import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Dialog from '../components/Modal'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'

export const Home = () => {
    const [open, setOpen] = React.useState(false);
    const [dataDialog, setDataDialog] = useState([])
    const [dataPokemon, setDataPokemon] = useState([])


    const handleOpen = (e) => {
        setOpen(true)
    };


    useEffect(()=>{
      getPokemons()
    },[])
  
    const getPokemons = () =>{
      var endpoints = []
      for (let i = 1; i< 151; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      }
      axios.all(endpoints.map((endpoint)=>axios.get(endpoint)))
      .then((resp)=> setDataPokemon(resp))
      .catch((error)=> console.log(error))
    } 

    const pokemonFilter = (name) =>{
        var name = name.toLowerCase()
        console.log(name);
        var filteredPokemons = []
        if(name === ''){
            getPokemons()
        }
        for(var i in dataPokemon){
            if(dataPokemon[i].data.name.includes(name)){
                filteredPokemons.push(dataPokemon[i])
            }
        }

        setDataPokemon(filteredPokemons)

    }

  return (
    <div>
        <NavBar pokemonFilter={pokemonFilter}  />
         <Container  maxWidth='xl'>
        <Grid container spacing={2}  display='flex' justifyContent='center' alignItems='center'   >
        {
            dataPokemon.length === 0 ? (<Loading/>) 
            :
            ( 
              dataPokemon.map((pokemon)=>
            
            <Grid  onClick={()=>{setDataDialog(pokemon.data)}}  key={pokemon.data.id} item ml={0} p={0} xs={12} sm={6} md={4} lg={3}>
                <Box    onClick={handleOpen} margin='auto'>
                    <PokemonCard pokemon={pokemon.data.types[0].type.name} onClick={()=>console.log(pokemon.data.name)} name={pokemon.data.name} image={pokemon.data.sprites.other['official-artwork'].front_default} types={pokemon.data.types}/>
                </Box>
             </Grid>
           
            ))
        }
          {
            dataDialog.length === 0 ? ('') : (<Dialog dataDialog={dataDialog} open={open} setOpen={setOpen}/>)
          }
        </Grid>
      </Container>
    </div>
  )
}