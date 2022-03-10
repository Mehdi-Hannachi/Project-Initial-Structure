import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userRegister } from "../../JS/actions/authactions";

const SignUp = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    let newUser = {
      fullName,
      email,
      password,
    };

    dispatch(userRegister(newUser));

    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={(e) => register(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
