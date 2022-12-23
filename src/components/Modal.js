import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  width: { xs: '80%', sm : '500px'},
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  borderRadius: '10px',
  p: 4,
};

export default function Dialog({open, setOpen, dataDialog}) {
  const handleClose = () => setOpen(false);


  const abilitiesHandler = () =>{

    if(dataDialog.abilities[1]){
      return dataDialog.abilities[0].ability.name + ' & ' + dataDialog.abilities[1].ability.name
    }
    return dataDialog.abilities[0].ability.name
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {dataDialog.name}
          </Typography>
          <Box sx={{width: {xs : '180px', sm: '350px'}}}  component='img' src={dataDialog.sprites.other['official-artwork'].front_default}/>
        <Box display='flex' justifyContent="space-around" alignItems="center">
        <Typography  variant='h5' >
          Habilidades 
        </Typography>
        <Typography variant="h7">
          {abilitiesHandler()}
        </Typography>
        </Box>
        <Box display='flex' justifyContent="space-around" alignItems="center">
          <Typography variant='h5' >
            Peso 
          </Typography>
          <Typography variant="h6">
          {dataDialog.weight / 10 + 'Kg'} 
          </Typography>
        </Box>
        <Box display='flex' justifyContent="space-around" alignItems="center">
          <Typography variant='h5' >
            Altura 
          </Typography>
          <Typography variant="h6">
          {dataDialog.height / 10 + 'M'}
          </Typography>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}