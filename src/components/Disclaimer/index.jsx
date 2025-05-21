import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const Disclaimer = () => (
  <Box sx={{ backgroundColor: '#0c1c3c', color: '#fff', borderRadius: 1, mt: 2, border: 'solid 1px #448aff' }}>
    <Accordion sx={{ backgroundColor: '#0c1c3c', color: '#fff' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InfoOutlinedIcon sx={{ mr: 1, color: '#3399FF' }} />
          <Typography>Important Notes & Disclaimers</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="white">
            <ul>
                <li>Some countries do not have a short-term and long-term bifurcation.</li>
                <li>Only realized losses are considered for harvesting.</li>
                <li>Tax loss harvesting is currently not allowed under indian tax regulations.</li>
            </ul>
             
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
)

export default Disclaimer
