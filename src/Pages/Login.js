import TextField from '@mui/material/TextField';
import {Button} from "@mui/material"
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login(){
    const navigate = useNavigate();
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
    });
    console.log(formik.values.email)
    return(
        <div style={{boxShadow: "10px 10px 120px lightblue"}} className="Login">
            <h2 style={{textAlign:"start",fontWeight:"300"}}>Login</h2>
            <form style={{display:"grid",gap:"2pc"}} >
                <TextField id="email" label="Email" variant="outlined" type="email" value={formik.values.email} onChange={formik.handleChange} />
                <TextField id="password" label="Password" variant="outlined" type="password" value={formik.values.password} onChange={formik.handleChange}/>
            <Button variant="contained" style={{width:"fit-content",margin:"auto auto"}} onClick={()=>{
                 navigate("/signup");
            }} >Login</Button>
            </form>
        </div>
    )
}
export default Login;