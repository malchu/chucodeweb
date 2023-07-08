import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function Settings() {
  return (
    <div className='settings'>
      <Accordion sx={{ backgroundColor: '#24222c', color: 'white', width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Button variant="contained" href="#contained-buttons" color="secondary">
              Change username
            </Button>
            <Button variant="contained" href="#contained-buttons" color="error">
              Delete account
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#24222c', color: 'white', width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Privacy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Switch color="warning" />}
                  label="Public profile"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#24222c', color: 'white', width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: 'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Notifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="start"
                  control={<Switch color="warning" />}
                  label="Email notifications"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className='about'>
      <h2> About the Creator </h2>
      <p>Malchu Pascual is a computer science student at the University of Maryland. Because algorithm and data structure 
        problem solving problems play an important role in the interview process for software engineers, Malchu decided to 
        build this app. He hopes to simplify what could be considered a daunting and unclear process in how to prepare for 
        these technical interviews. 
      </p>
      <a href="https://github.com/malchu"><img alt='' class="link" src={require("./github.png")}></img></a>
      <a href="https://www.linkedin.com/in/malchupascual/"><img alt='' class="link" src={require("./linkedin.png")}></img></a>
      <h2>Check out Malchu's Other Apps!</h2>
      <a href="https://tennismatchpredictor.malchupascual.repl.co/"><img alt='' class="link" src={require("./tmp.png")}></img></a>
      <a href="/"><img alt='' class="link" src={require("./ChuCodeLogo.png")}></img></a>
      </div>
    </div>
  )
}

export default Settings;