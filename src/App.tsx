import { useEffect, useState } from "react";
import Form from "./Components/Form";
import GearButton from "./Components/GearButton";
import classNames from "classnames";
import "./index.css";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((current) => !current);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) =>
      e.key === "Escape" ? setIsDrawerOpen(false) : "";

    document.addEventListener("keydown", onEscape);

    return document.removeEventListener("keydown", onEscape);
  }, []);
  return (
    <div className="text-gray-300 pt-12 md:pt-4 font-mono h-screen">
      <h1 className="text-center fs-3 mb-8">Pomodoro</h1>

      <GearButton toggleDrawer={toggleDrawer} />
      <Form isDrawerOpen={isDrawerOpen} />

      <div className="w-[85%] h-3/5 sm:h-3/4 bg-gray-300/25 rounded-2xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <p
          className="fs-4 grow flex justify-center items-center opacity-90"
          id="timer"
        >
          00:00
        </p>

        <button
          disabled={isDrawerOpen}
          className={classNames({
            "w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase": true,
            "bg-[#602020] cursor-pointer": !isDrawerOpen,
            "bg-[#ccc] cursor-not-allowed": isDrawerOpen,
          })}
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
