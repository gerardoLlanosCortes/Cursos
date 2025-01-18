import React from "react";

export default function UserHeader({ userData }) {
  return (
    <div className=" bg-gray-50 ">
      <div className=" flex gap-3 px-36 py-14">
        <div className="flex flex-col">
          <img
            src={`https://deeplol-ddragon-cdn.deeplol.gg/cdn/14.1.1/img/profileicon/${userData.profileIconId}.png?f=webp`}
            alt={userData.profileIconId}
            className="rounded-lg w-28"
          />
          <p className="text-center font-bold text-lg bg-gray-800 text-gray-50 w-fit mx-auto px-3 py-1 rounded-lg -mt-4">{userData.summonerLevel}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">{userData.name} <span className="font-normal text-gray-400">#LAS</span></h1>
        </div>
      </div>
    </div>
  );
}
