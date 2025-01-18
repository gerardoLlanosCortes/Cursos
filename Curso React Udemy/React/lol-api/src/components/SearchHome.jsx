import React from "react";
import IconOPGG from "../assets/opgg.webp";

export default function SearchHome({ user, setUser, handleSearch }) {
  return (
    <>
      <div className="bg-lol-light-blue h-screen flex flex-col justify-center items-center gap-3">
        <img src={IconOPGG} alt="OPGG" className="w-96" />
        <form
          onSubmit={handleSearch}
          className="bg-gray-50 w-6/12 flex justify-between rounded-3xl border-2"
        >
          <input
            type="text"
            className="bg-gray-50 w-full p-3 rounded-3xl focus:outline-none"
            placeholder="Ingresar Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="submit"
            value=".GG"
            className="px-3 font-bold text-lol-light-blue"
          />
        </form>
      </div>
    </>
  );
}
