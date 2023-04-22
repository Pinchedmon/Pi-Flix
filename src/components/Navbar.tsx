import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-green-600 text-4xl font-bold cursor-pointer">
          PI-FLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="account">
            <button className="text-white pr-4">Аккаунт</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Выйти
          </button>
        </div>
      ) : (
        <div>
          <Link to="login">
            <button className="text-white pr-4">Вход</button>
          </Link>
          <Link to="signup">
            <button className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white">
              Регистрация
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
