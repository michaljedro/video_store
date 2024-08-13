import styled from "styled-components";
import React, { useState, FormEvent } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [notice, setNotice] = useState<string>("");

  const loginWithUsernameAndPassword = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("./home");
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Form>
          {notice !== "" && <Alert role="alert">{notice}</Alert>}
          <FormGroup>
            <Input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="exampleInputEmail1">Email address</Label>
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Label htmlFor="exampleInputPassword1">Password</Label>
          </FormGroup>
          <ButtonGroup>
            <Button type="submit" onClick={loginWithUsernameAndPassword}>
              Submit
            </Button>
          </ButtonGroup>
          <SignupLink>
            Need to sign up for an account?{" "}
            <StyledLink to="/signup">Click here.</StyledLink>
          </SignupLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

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

  &:hover {
    background-color: #0056b3;
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
