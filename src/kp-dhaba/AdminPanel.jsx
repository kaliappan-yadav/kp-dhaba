
import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AuthContext } from './context/AuthContext';

const AdminPanel = () => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    let userContext = useContext(AuthContext);
    function checkLogin(userName, password){
        return userContext.includes({name: userName, passwd: password})
    }
  return (
    <Container>
        <label>User name : </label>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)} ></input>
        <br/>
        <label>Password : </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
        <br/>
        <button onClick={()=>checkLogin(userName, password)} type='submit'>Submit</button>
    </Container>
  )
}

export default AdminPanel