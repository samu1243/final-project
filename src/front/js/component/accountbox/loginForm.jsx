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
import { Context } from "../../store/appContext.js";
import { useNavigate } from "react-router-dom";


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const login = () => {
    actions.login(email, password).then(() => {
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
        </FormContainer>
      )}
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>
        Sign-in
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign-up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
