import SearchHome from "./SearchHome";
import SearchTop from "./SearchTop";

export default function Search({ user, setUser, userData, setUserData }) {
  const handleSearch = (e) => {
    e.preventDefault();

    if (user.length > 0) {
      const searchUser = async () => {
        const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}?api_key=RGAPI-59f01479-3bf2-469c-88ef-1d885676d350`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setUserData(resultado);
      };

      searchUser();
    }
  };

  return (
    <>
      {userData.name ? (
        <SearchTop handleSearch={handleSearch} user={user} setUser={setUser} />
      ) : (
        <SearchHome handleSearch={handleSearch} user={user} setUser={setUser} />
      )}
    </>
  );
}
