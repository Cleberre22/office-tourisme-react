import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Container from "react-bootstrap/Container";
import LoginForm from "../components/LoginForm";

// const LoginUser = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [validationError, setValidationError] = useState({});

//   //Fonction d'ajout de club
//   const Login = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);

//     await axios
//       .post(`http://localhost:8000/api/auth/register`, formData)
//       .then(navigate("/home"))
//       .catch(({ response }) => {
//         if (response.status === 422) {
//           setValidationError(response.data.errors);
//         }
//       });
//   };

  function Login() {
    return (
      <div>
        <Logo />
        <Menu />
        <Container fluid className="loginContainer">
          <LoginForm />
        </Container>
        <Footer />
      </div>
    );
  }
  
  export default Login;