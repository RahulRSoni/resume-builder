import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PersonalInfo from './Structure/PersonalInfo';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>

        {/* <PersonalInfo/> */}
         
        
          <ListItemText>personal info</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem>
         
          <ListItemText>Work Experience</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <MenuItem>
        
          <ListItemText>Education</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        
          <ListItemText>Key skills </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}