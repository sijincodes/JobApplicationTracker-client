import "./SignupPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="Page">
      <div className="container">
        <div className="innerWrapper">
          <h1>Sign Up</h1>

          <form onSubmit={handleSignupSubmit}>
          <div className="formContainer">
          <div className="formInnerContainer">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            </div>
            <div className="formInnerContainer">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />
            </div>
            <div className="formInnerContainer passwordDiv">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            </div>
            <div className="formInnerContainer">
            <button className="buttonForm" type="submit">Sign Up</button>
            </div>
            
            </div>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p style={{marginBottom:"0px"}}>Already have account?</p>
          <Link to={"/login"} style={{color:"#678983" ,fontSize:"15px" }}> Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
