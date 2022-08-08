import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import {
  addStagiaire,
  updateStagiaire,
} from "../features/stagiaire/stagiaireSlice";

export const StagiaireForm = (props) => {
  const stagiaire = props.stagiaire;
  const setStagiaire = props.setStagiaire;
  const close = props.close;
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setStagiaire({ ...stagiaire, sexe: e.target.value });
  };

  const handleChangeSelect = (e) => {
    setStagiaire({ ...stagiaire, option: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.title === "Ajouter") {
      await dispatch(addStagiaire(stagiaire));
      alert("Stagiaire ajouté");
    } else {
      console.log("I am in update", stagiaire);
      await dispatch(updateStagiaire(stagiaire));
      alert("Stagiaire modifié");
    }
    close();
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {props.title === "Ajouter"
          ? "Ajouter Un Stagiaire"
          : "Modifier " + props.stagiaire.nom + " " + props.stagiaire.prenom}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Remplir le formulaire SVP
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="CIN"
            variant="outlined"
            required
            defaultValue={stagiaire.cin}
            onChange={(e) =>
              setStagiaire({ ...stagiaire, cin: e.target.value })
            }
          />
        </div>
        <div className="my-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            required
            defaultValue={stagiaire.nom}
            onChange={(e) =>
              setStagiaire({ ...stagiaire, nom: e.target.value })
            }
          />
        </div>
        <div className="my-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Prénom"
            variant="outlined"
            required
            defaultValue={stagiaire.prenom}
            onChange={(e) =>
              setStagiaire({ ...stagiaire, prenom: e.target.value })
            }
          />
        </div>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={stagiaire.sexe}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Option</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stagiaire.option}
            label="Option"
            onChange={handleChangeSelect}
          >
            <MenuItem value={"TWIN"}>TWIN</MenuItem>
            <MenuItem value={"GL"}>GL</MenuItem>
            <MenuItem value={"Sleam"}>Sleam</MenuItem>
          </Select>
        </FormControl>

        <div className="my-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            defaultValue={stagiaire.email}
            onChange={(e) =>
              setStagiaire({ ...stagiaire, email: e.target.value })
            }
          />
        </div>
        <div className="my-5">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Tel"
            variant="outlined"
            required
            defaultValue={stagiaire.tel}
            onChange={(e) =>
              setStagiaire({ ...stagiaire, tel: e.target.value })
            }
          />
        </div>
        <Button variant="contained" color="success" type="submit" fullWidth>
          {props.title === "Ajouter" ? "Ajouter" : "Modifier "}
        </Button>
      </form>
    </>
  );
};
