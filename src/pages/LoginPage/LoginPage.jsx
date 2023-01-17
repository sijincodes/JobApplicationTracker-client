import "./../SignupPage/SignupPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
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
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
      <div className="formContainer">
      <div className="formInnerContainer" style={{paddingLeft: "25px"}}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
</div>
 <div className="formInnerContainer">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </div>
        <div className="formInnerContainer">
        <button  className="buttonForm" type="submit" style={{marginLeft: "20px"}}>Login</button>
        </div>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p style={{marginBottom:"0px",color:"white"}}>Don't have an account yet?</p>
      <Link to={"/signup"} style={{color:"#678983" ,fontSize:"15px" }}> Sign Up </Link>
    </div>
    </div>
    </div>
  );
}

export default LoginPage;
