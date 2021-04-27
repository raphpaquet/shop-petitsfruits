import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function SigninScreen(props) {
  const [email, setEmail] = useState('paquetraphaelle@gmail.com');
  const [password, setPassword] = useState("visitorpassword");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

 
  return (
    <div className="row top">
      <div className="col-2">
      <form className="form" onSubmit={submitHandler}>
        <div className="center">
          <h1>Sign In</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email"></label>
          {!email === 'paquetraphaelle@gmail.com' && !password === 'visitorpassword' ?  
          <input
          type="email"
          id="email"
          placeholder="Adresse Courriel"
          required
          onChange={(e) => setEmail(e.target.value)}
          ></input>
          : 
          <input
          type="email"
          id="email"
          placeholder="Adresse Courriel"
          onChange={(e) => setEmail(e.target.value)}
          ></input> }
        </div>
        <div>
          <label htmlFor="password"></label>
          {!email === 'paquetraphaelle@gmail.com' && !password === 'visitorpassword' ?  
            <input
              type="password"
              id="password"
              placeholder="Mot De Passe"
              required
              onChange={(e) => setPassword(e.target.value)}
              ></input>
              :
              <input
                type="password"
                id="password"
                placeholder="Mot De Passe"
                onChange={(e) => setPassword(e.target.value)}
                ></input> }
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Connexion
          </button>
        </div>
        <div>
          <label />
          <div>
            Nouveau client ?{" "}
            <Link to={`/register?redirect=${redirect}`} className="links">
              Créer un compte
            </Link>
          </div>
        </div>
      </form>
      </div>
      <div className="col-1 visitor">
        <button type="submit" onClick={submitHandler}>Continuer en tant que visiteur</button>
      </div>
    </div>
  );
}
