import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components/Login.css'


function Login() {

  const [uname,setName]=useState("")
  const [pass,setPass]=useState("")

  const location=useNavigate()

  useEffect(() => {
 console.log("uname is",uname);
 console.log("pass is",pass);
  },)
  
  const login=(e)=>{
    
    e.preventDefault()

    if(uname=="akhil"){

      if(pass=="1996"){

        alert("login successful");
        location('home')
   
        }

        else

        alert("incorrect password");
   
        }
      
        else{
          alert("incorrect username");
        }

  }

  return (

 
    
    <div>
        <form className='main'>

        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  onChange={(e)=>setPass(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

<div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={(e)=>login(e)} type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login