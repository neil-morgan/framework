import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Page from "../components/Page";
import { Section, Container, Row, Col, Text, Button } from "../";
import utilities from "../utilities";

const { brightness } = utilities;

export default function Schedule() {
  const signup = () => {
    alert(
      `User Created! Name: ${inputs.firstName} ${inputs.lastName} Email: ${inputs.email}`
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    { firstName: "", lastName: "", email: "", password1: "", password2: "" },
    signup
  );
  return (
    <Page>
      <SplashScreen>
        <Container fluid>
          <Col xs>
            <Form onSubmit={handleSubmit} autoComplete="off">
              <InputGroup>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleInputChange}
                  value={inputs.firstName}
                  required
                />
              </InputGroup>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleInputChange}
                value={inputs.lastName}
                required
              />

              <label>Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password1"
                onChange={handleInputChange}
                value={inputs.password1}
              />

              <label>Re-enter Password</label>
              <input
                type="password"
                name="password2"
                onChange={handleInputChange}
                value={inputs.password2}
              />
            </Form>
            <Link href="/signin">
              <a>Or sign in</a>
            </Link>
          </Col>
        </Container>
      </SplashScreen>
    </Page>
  );
}

function useSignUpForm(initialValues, callback) {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  min-width: 32rem;
  background: linear-gradient(
    33deg,
    ${({ theme }) => brightness(theme.primary, 0)} 0%,
    ${({ theme }) => brightness(theme.primary, -20)} 100%
  );
`;

const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  label {
    cursor: text;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  input {
    background: transparent;
    border: 0;
    color: #fff;
  }
`;

const SplashScreen = styled(Section)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
