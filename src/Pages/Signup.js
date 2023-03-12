import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material"
import { useFormik } from 'formik';


export default function Signup() {
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
            firstname:"",
            lastname:"",
        },
    });
    console.log(formik)
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },padding:"1pc", borderRadius: "15px",boxShadow: "10px 10px 120px lightblue"
      }}
      noValidate
      autoComplete="off"
    >
    <h2 style={{textAlign:"center",fontWeight:"300"}}>Signup</h2>
      <div>
      <TextField id="email" label="Email" variant="outlined" type="email" value={formik.values.email} onChange={formik.handleChange} />
        <TextField
          label="Confirm Email"
        />
      </div>
      <div>
      <TextField id="firstname" label="First Name" variant="outlined" type="email" value={formik.values.firstname} onChange={formik.handleChange} />
      <TextField id="lastname" label="Last Name" variant="outlined" type="email" value={formik.values.lastname} onChange={formik.handleChange} />
      </div>
      <div>
      <TextField id="password" label="Password" variant="outlined" type="password" value={formik.values.password} onChange={formik.handleChange}/>
      </div><br></br>
      <Button variant="contained" style={{width:"fit-content",margin:"auto auto"}}>Signup</Button>

    </Box>
  );
}