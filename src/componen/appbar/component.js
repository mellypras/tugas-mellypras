import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function Apps(){
    return(
   <Box  display="flex" justifyContent="center">
      <React.Fragment>
        <AppBar position="static" style={{height: 60 ,backgroundColor:'red', maxWidth: 443}}>
        <Typography 
        style={{marginLeft: '165px', marginTop: '20px'}}
        >AppBar</Typography>
        </AppBar>
      </React.Fragment>  
   </Box>
     
    );
}
export default Apps;