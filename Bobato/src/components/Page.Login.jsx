import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setToken, setUserName }) {
  const navigate = useNavigate();
  const email = React.useRef();
  const password = React.useRef();

  const login = async () => {
    const data = await fetch("http://localhost:55/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    });

    const json = await data.json();
    const tokenCookie = `token=${json.Token}; SameSite=None; Secure`;
    const userNameCookie = `userName=${json.UserID}; SameSite=None; Secure`;
    document.cookie = tokenCookie;
    document.cookie = userNameCookie;
    setToken(json.Token);
    setUserName(json.UserName);
    navigate("/");
  };

  return (
    <div className="Page">
      <header>
        <h1>Connexion</h1>
      </header>
      <main className="CenteredBox">
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="content"
          ref={email}
          defaultValue="pouet@pouet.pouet"
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          id="password"
          type="password"
          ref={password}
          defaultValue="pouet"

        />
        <button onClick={login} className="Button mb">
          Se connecter
        </button>
        <Link to="/register" className="white">
          Pas de compte ?
        </Link>
      </main>
    </div>
  );
}