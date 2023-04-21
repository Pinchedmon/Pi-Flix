import React from "react";

function Navbar(props: any) {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-green-600 text-4xl font-bold cursor-pointer">
        PI-FLIX
      </h1>
      <div>
        <button className="text-white pr-4">Вход</button>
        <button className="bg-green-600 px-6 py-2 rounded cursor-pointer text-white">
          Выход
        </button>
      </div>
    </div>
  );
}

export default Navbar;
