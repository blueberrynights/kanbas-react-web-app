import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Account from "./account";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const signin = async () => {
    console.log('Signing in with credentials:', credentials);
    await client.signin(credentials);
    <Navigate to="Account" />
  };


  return (
    <div>
      <h1>Sign In</h1>
      <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="w-100 btn btn-primary mb-2" onClick={signin}> Sign In </button>
    </div>
  );
}
export default Signin;