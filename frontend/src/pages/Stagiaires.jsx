import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {getStagiaires,reset,deleteStagiaire} from '../features/stagiaire/stagiaireSlice'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { StagiaireForm } from '../components/StagiaireForm';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import StageForm from '../components/StageForm';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const Stagiaires = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const {stagiaires } = useSelector((state)=>state.stagiaire)
    let counter = 0;
    const [title,setTitle] = useState("") ;
    const [open, setOpen] = React.useState(false);
    const handleOpen = (form) => {setForm(form); setOpen(true);}
    const handleClose = () => {setForm({
      cin : '',
      nom : '',
      prenom : '',
      sexe : '',
      email : '',
      tel : '',
      option : ''
  }); setTitle(""); setOpen(false);}
    
    const [form, setForm] = React.useState({
      cin : '',
      nom : '',
      prenom : '',
      sexe : '',
      email : '',
      tel : '',
      option : ''
  });




  const [dopen, setDopen] = React.useState(false);

  const handleClickOpen = (id) => {
    setId(id)
    setDopen(true);
  };

  const handleClickClose = () => {
    setId("")
    setDopen(false);
  };



  const [sopen, setSopen] = React.useState(false);
  const handleStageOpen = (form) => {setForm(form);setSopen(true);}
  const handleStageClose = () => {setForm({
    cin : '',
    nom : '',
    prenom : '',
    sexe : '',
    email : '',
    tel : '',
    option : ''
});setSopen(false);}



    useEffect(() => {
        dispatch(getStagiaires());
        return () => {
            dispatch(reset())
          }
    },[dispatch,id])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    
      <main className="max-w-48xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <Button variant="contained" onClick={()=>{setTitle("Ajouter") ; handleOpen(form);}}>Ajouter un stagiaire</Button>
        <div className="mt-4">

        

        <div className="mt-2 flex flex-col">
        <div className="-my-2  -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">




      <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cin</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pr??nom</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexe</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tel</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Option</th>   
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Affecter</th>    
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modifier</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supprimer</th>         
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {
        stagiaires.map((stagiaire)=>{
          counter++
          return(
            <tr key={stagiaire._id}>
              <td className="px-6 py-4 whitespace-nowrap">{counter}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.cin}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.nom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.prenom}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.sexe}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.tel}</td>
              <td className="px-6 py-4 whitespace-nowrap">{stagiaire.option}</td>
              <td className="px-6 py-4 whitespace-nowrap"><Button variant="contained" onClick={()=>{ handleStageOpen(stagiaire) }}>Affecter</Button></td>
              <td className="px-6 py-4 whitespace-nowrap"><Button variant="outlined" onClick={()=>{setTitle("Modifier") ;handleOpen(stagiaire); }}>Modifier</Button></td>
              <td className="px-6 py-4 whitespace-nowrap"><Button variant="outlined" color="error" onClick={()=>{handleClickOpen(stagiaire._id)}}>Supprimer</Button></td>
            </tr>
          )
        })
      }
      
    </tbody>
  </table>







</div></div></div></div>




  </div></main>
  
  
  
  
  
  
  
  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
           
           
        <StagiaireForm stagiaire={form} setStagiaire={setForm} title= {title} close={handleClose}></StagiaireForm></Box>
      </Modal>




{ sopen ? <StageForm open={sopen} handleClose={handleStageClose} form={form}></StageForm> : null }

      <Dialog
        open={dopen}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Vous etes sur de supprimer ce stagiaire ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Si vous cliquez "Oui" le stagiaire va ??tre effac??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={()=>{
            dispatch(deleteStagiaire(id));
            handleClickClose () 
          }} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
  
  
  
  
  
  
  
  </div>




    




  )
}
