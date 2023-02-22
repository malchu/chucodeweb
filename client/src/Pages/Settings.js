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
    </div>
  )
}

export default Settings;