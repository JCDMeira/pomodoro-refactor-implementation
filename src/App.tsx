import { ReactComponent as Gear } from "./assets/img/gear.svg";

function App() {
  return (
    <div className="text-gray-300 pt-12 md:pt-4 font-mono h-screen">
      <h1 className="text-center fs-3 mb-8">Pomodoro</h1>

      <Gear className="absolute top-4 right-4 cursor-pointer z-[2]" id="gear" />

      <div className="w-[85%] h-3/5 sm:h-3/4 bg-gray-300/25 rounded-2xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <p
          className="fs-4 grow flex justify-center items-center opacity-90"
          id="timer"
        >
          00:00
        </p>

        <button
          className="bg-[#602020] w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase"
          id="control-button"
        >
          Start
        </button>

        <p className="whitespace-pre-wrap fs-1 font-semibold" id="notice-user">
          {" "}
        </p>

        <p className="cycles fs-1 font-light" id="cycles">
          0
        </p>
      </div>
    </div>
  );
}

export default App;
