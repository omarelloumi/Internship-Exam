import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { affectStage } from "../features/stage/stageSlice"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StageForm = ({ open, handleClose, form }) => {
  const [stage, setStage] = useState({
    stagiaire: form._id,
    sujet: "",
    dateDebut: "",
    dateFin: "",
  });

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(stage)
    dispatch(affectStage(stage))
    handleClose()
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Affecter CIN {form.cin} Nom et prénom : {form.nom} {form.prenom}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Remplir le formulaire SVP
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Sujet"
                variant="outlined"
                required
                defaultValue={stage.sujet}
                onChange={(e) => setStage({ ...stage, sujet: e.target.value })}
              />
            </div>
            <label>Date Debut:</label>
            <div className="my-5">
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  type="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                  defaultValue={stage.dateDebut}
                  onChange={(e) =>
                    setStage({ ...stage, dateDebut: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <label>Date Fin:</label>
            <div className="my-5">
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  type="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                  defaultValue={stage.dateFin}
                  onChange={(e) =>
                    setStage({ ...stage, dateFin: e.target.value })
                  }
                ></input>
              </div>
            </div>
            <Button variant="contained" color="success" type="submit" fullWidth>
              Affecter
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default StageForm;
