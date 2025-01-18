import React from "react";
import Match from "./Match";

export default function MatchsList({ infoPartidas, userPuuid }) {
  return (
    <div className="flex flex-col container mx-auto mt-3 rounded gap-3">
      {infoPartidas.map((partida) => (
        <Match key={partida.metadata.matchId} info={partida.info} userPuuid={userPuuid}/>
      ))}
    </div>
  );
}
