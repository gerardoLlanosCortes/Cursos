import React, { useState } from "react";
import { formatearFecha, diasTranscurridos, minutosJugados } from "../helpers";
import { useEffect } from "react";
import ImageItems from "./ImageItems";

export default function Match({ info, userPuuid }) {
  console.log(info);

  const [infoMatchUser, setInfoMatchUser] = useState({});

  useEffect(() => {
    const userMatch = info.participants.filter(
      (participant) => participant.puuid === userPuuid
    );
    console.log(userMatch);
    setInfoMatchUser(userMatch[0]);
  }, [info]);

  return (
    <div className={`w-full flex justify-between items-star p-8  rounded ${!infoMatchUser.win ? "bg-red-400" : "bg-blue-400"} bg-opacity-30 font-semibold`}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="flex">
            <img
              src={`https://opgg-static.akamaized.net/meta/images/lol/14.1.1/champion/${infoMatchUser.championName}.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160,h_160&v=1702977255104`}
              alt="champ"
              className="w-20 rounded-full object-cover z-0"
            />
            <div className="z-50 relative">
              <p className="bg-gray-900 text-gray-50 w-fit ml-auto px-1 py-0 rounded-full absolute bottom-0 right-0 font-normal text-base">
                {infoMatchUser.champLevel}
              </p>
            </div>
          </div>


          <div>
            <h1 className="text-xl">
              {infoMatchUser.kills}/{infoMatchUser.assists}/
              {infoMatchUser.deaths}
            </h1>
          </div>
        </div>

        <div className="flex gap-1">
          <ImageItems image={infoMatchUser.item0} />
          <ImageItems image={infoMatchUser.item1} />
          <ImageItems image={infoMatchUser.item2} />
          <ImageItems image={infoMatchUser.item3} />
          <ImageItems image={infoMatchUser.item4} />
          <ImageItems image={infoMatchUser.item5} />
          <ImageItems image={infoMatchUser.item6} />
        </div>
      </div>

      <div className="text-right">
        <div>
          <h1>{info.gameMode}</h1>
          <p>{formatearFecha(info.gameEndTimestamp)}</p>
        </div>
        <div>
          <h1 className={`${!infoMatchUser.win ? "text-red-600" : "text-blue-600"} font-bold`}>{infoMatchUser.win ? "Win" : "Defeat"}</h1>
          <p>{minutosJugados(info.gameDuration)}</p>
        </div>
      </div>
    </div>
  );
}
