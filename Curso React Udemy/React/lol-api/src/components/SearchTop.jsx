import React from "react";

export default function SearchTop({user, setUser, handleSearch}) {
  return (
    <div className="p-10 bg-lol-light-blue text-gray-50 mx-auto flex justify-center items-center">
      <form
        className="w-8/12 flex items-center justify-between px-3 gap-3 text-xl font-semibold bg-gray-50 rounded border-2"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className=" bg-gray-50 rounded p-1 w-full focus:outline-none text-gray-900 text-base placeholder:text-gray-300 placeholder:font-normal"
          placeholder="Ingresar Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="submit"
          value=".GG"
          className="text-lol-light-blue font-bold"
        />
      </form>
    </div>
  );
}
