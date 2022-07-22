import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common.jsx";
import { Marginer } from "../marginer/index.jsx";
import { AccountContext } from "./accountContext.js";
import { useNavigate, useNavigation } from "react-router-dom";
import { Context } from "../../store/appContext.js";

export function SignupForm(props) {
  const { store, actions } = useContext(Context);
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log("this is your token", token);

  const register = () => {
    actions.signup(username, email, password).then(() => {
      navigate("/");
    });
  };



  return (
    <BoxContainer>
      {token && token != "" && token != undefined ? (
        "You are already logged in"
      ) : (
        <FormContainer>
          <Input
            type="text"
            placeholder="Character Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Input type="password" placeholder="Confirm Password" />
        </FormContainer>
      )}
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={register}>
        Sign up
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
