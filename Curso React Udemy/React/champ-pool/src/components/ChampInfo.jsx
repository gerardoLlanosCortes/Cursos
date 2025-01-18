import IconTopLane from "../assets/img/top-lane.png";
import IconJg from "../assets/img/jg.png";
import IconMidLane from "../assets/img/mid-lane.png";
import IconBotLane from "../assets/img/bot-lane.png";
import IconSupport from "../assets/img/suppot.png";

const diccionarioIconos = {
  top: IconTopLane,
  jg: IconJg,
  mid: IconMidLane,
  adc: IconBotLane,
  support: IconSupport,
};

export default function ChampInfo({ champ }) {
  const totalGames = (victorias, derrotas) => {
    return victorias + derrotas;
  };

  const winRate = (victorias, total) => {
    return ((victorias / total) * 100).toFixed(1);
  };

  const kda = (asesinatos, asistencias, muertes) => {
    return ((asesinatos + asistencias) / muertes).toFixed(1);
  };
  return (
    <div className="bg-gray-100 flex justify-between items-center p-6 px-10 w-full border-b-2 border-lol-gold-3 border-opacity-30">
      <div className="flex gap-3">
        <img
          className="h-28 w-28 object-cover"
          src={diccionarioIconos[champ.rol]}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <p className="text-lol-gold-3 text-3xl font-bold text-opacity-50">
            {champ.rol}
          </p>
          <h1 className="text-lol-blue-6 text-opacity-80 text-5xl font-bold pl-4 italic">
            {champ.campeon}
          </h1>
        </div>
      </div>

      <div className="flex gap-6">
        <div>
          <p className="font-bold">
            Total Partidas:{" "}
            <span className="font-normal">
              {totalGames(champ.victorias, champ.derrotas)}
            </span>
          </p>
          <p className="font-bold">
            Victorias: <span className="font-normal">{champ.victorias}</span>
          </p>
          <p className="font-bold">
            Derrotas: <span className="font-normal">{champ.derrotas}</span>
          </p>
        </div>

        <div>
          <p className="font-bold">
            Asesinatos: <span className="font-normal">{champ.asesinatos}</span>
          </p>
          <p className="font-bold">
            Asistencias:{" "}
            <span className="font-normal">{champ.asistencias}</span>
          </p>
          <p className="font-bold">
            Muertes: <span className="font-normal">{champ.muertes}</span>
          </p>
        </div>

        <div>
          <p className="font-bold">
            Winrate:{" "}
            <span
              className={`${
                winRate(
                  champ.victorias,
                  totalGames(champ.victorias, champ.derrotas)
                ) < 50
                  ? "text-red-600 font-black"
                  : "font-normal"
              }`}
            >
              {winRate(
                champ.victorias,
                totalGames(champ.victorias, champ.derrotas)
              )}
              %
            </span>
          </p>
          <p className="font-bold">
            KDA:{" "}
            <span
              className={`${
                kda(champ.asesinatos, champ.asistencias, champ.muertes) < 1
                  ? "text-red-600 font-black"
                  : "font-normal"
              }`}
            >
              {kda(champ.asesinatos, champ.asistencias, champ.muertes)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
