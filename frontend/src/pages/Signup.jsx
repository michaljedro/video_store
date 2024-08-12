import styled from "styled-components";
import React, { useState } from "react";
import auth from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setNotice("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setNotice(
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setNotice("Passwords don't match. Please try again.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setNotice("Sorry, something went wrong. Please try again.");
    }
  };

  const signupWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setNotice(
        "Sorry, something went wrong with Google sign up. Please try again."
      );
    }
  };

  return (
    <Container>
      <FormContainer>
        <Form>
          {notice !== "" && <Alert role="alert">{notice}</Alert>}
          <FormGroup>
            <Input
              id="signupEmail"
              type="email"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="signupEmail">
              Enter an email address for your username
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="signupPassword"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label htmlFor="signupPassword" className="form-label">
              Password
            </Label>
          </FormGroup>
          <FormGroup>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Label htmlFor="confirmPassword">Confirm Password</Label>
          </FormGroup>
          <ButtonGroup>
            <Button
              type="submit"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Sign up
            </Button>
            <GoogleButton onClick={signupWithGoogle}>
              Sign up with Google
            </GoogleButton>
          </ButtonGroup>
          <SignupLink>
            Go back to login? <StyledLink to="/login">Click here.</StyledLink>
          </SignupLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Signup;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;

  &:hover {
    background-color: #c23321;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Alert = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  text-align: center;
`;
