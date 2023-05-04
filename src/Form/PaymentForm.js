import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import tw from "tailwind-styled-components"
export default function PaymentForm() {
  return (
    <Wrapper>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Photographer Verification Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="AdharNumber"
            label="AdharNumber"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="PanNumber"
            label="Pan number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <label>
          Upload your Adhar Card*
        <input type="file" id="myFile" name="filename"/>
        </label>
        </Grid>
        <Grid item xs={12} md={6}>
        <label>
          Upload your Pan Card*
        <input type="file" id="myFile" name="filename"/>
        </label>
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          /> */}
        </Grid>
      </Grid>
    </React.Fragment>
    </Wrapper>
  );
}
const Wrapper = tw.div`
  w-full 
 
`