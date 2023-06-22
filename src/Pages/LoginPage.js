import "../App.css";
import React, { useState } from "react";
import LoginAlertPopup from "./LoginAlertPopup";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameAdmin = process.env.REACT_APP_USERNAME_ADMIN;
  const passwordAdmin = process.env.REACT_APP_PASSWORD_ADMIN;

  const userNameUser = process.env.REACT_APP_USERNAME_USER;
  const passwordUser = process.env.REACT_APP_PASSWORD_USER;

  const [alertPopup, setAlertPopup] = React.useState(false);
  const [message, setMessage] = useState("");

  const handleOpenAlertPage = (str) => {

    setMessage(str);
    setAlertPopup(true);
  };

  const Navigate = useNavigate();
  const handleForm = () => {
    if (userName === userNameAdmin && password === passwordAdmin) {
      Navigate("/login", {
        state: { user: userName },
      });
    } else if (userName === userNameAdmin && password !== passwordAdmin) {
      handleOpenAlertPage("Lütfen Şifrenizi Kontrol Ediniz !!");
    } else if (userName !== userNameAdmin && password === passwordAdmin) {
      handleOpenAlertPage("Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!");
    } else {
      handleOpenAlertPage(
        "Lütfen Kullanıcı Adınızı ve Şifrenizi \nKontrol Ediniz !!"
      );
    }
    if (userName === userNameUser && password === passwordAdmin) {
      Navigate("/login", { state: { user: userName } });
    } else if (userName === userNameUser && password !== passwordAdmin) {
      handleOpenAlertPage("Lütfen Şifrenizi Kontrol Ediniz !!");
    } else if (userName !== userNameUser && password === passwordUser) {
      handleOpenAlertPage("Lütfen Kullanıcı Adınızı \n Kontrol Ediniz !!");
    } else {
      handleOpenAlertPage(
        "Lütfen Kullanıcı Adınızı ve Şifrenizi \nKontrol Ediniz !!"
      );
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleForm();
    }
  });

  return (
    <>
      <div className="loginContainer">
        <div className="login">
          <div className="userName">
            <input
              type="text"
              id="userName"
              placeholder="Kullanıcı Adı"
              required
              autoComplete="off"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="passwd">
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              id="password"
              placeholder="Şifre"
              required
            />
          </div>
          <div className="loginButton">
            <button
              type="submit"
              onClick={() => {
                handleForm();
              }}
              id="loginButton"
            >
              Giriş
            </button>
          </div>
        </div>
      </div>

      <LoginAlertPopup
        open={alertPopup}
        close={() => setAlertPopup(false)}
        message={message}
      />
    </>
  );
}
