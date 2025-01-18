import { useEffect, useState } from "react";
import Search from "./components/Search";
import UserHeader from "./components/UserHeader";
import MatchsList from "./components/MatchsList";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [partidas, setPartidas] = useState([]);
  const [infoPartidas, setInfoPartidas] = useState([]);

  useEffect(() => {
    if (userData.puuid) {
      const obtenerPartidas = async () => {
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${userData.puuid}/ids?start=0&count=5&api_key=RGAPI-59f01479-3bf2-469c-88ef-1d885676d350`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setPartidas(resultado);
      };
      obtenerPartidas();
    }
  }, [userData]);

  useEffect(() => {
    if (partidas.length > 0) {
      const obtenerDatosPartida = async (partidaId) => {
        const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${partidaId}?api_key=RGAPI-59f01479-3bf2-469c-88ef-1d885676d350`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado;
      };

      const obtenerInfoPartidas = async () => {
        const promesasPartidas = partidas.map((partida) =>
          obtenerDatosPartida(partida)
        );
        const infoPartidas = await Promise.all(promesasPartidas);
        setInfoPartidas(infoPartidas);
      };

      obtenerInfoPartidas();
    }
  }, [partidas]);

  return (
    <>
      {userData.name ? (
        <>
          <Search
            user={user}
            setUser={setUser}
            userData={userData}
            setUserData={setUserData}
          />
          <UserHeader userData={userData} />

          <MatchsList infoPartidas={infoPartidas} userPuuid={userData.puuid} />
        </>
      ) : (
        <Search
          user={user}
          setUser={setUser}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
