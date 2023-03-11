import { useEffect, useMemo, useState } from 'react';
import Form from './Components/Form';
import GearButton from './Components/GearButton';
import classNames from 'classnames';
import './index.css';
import { viewMessages } from './Estate/PomodoroEstates/IPomodoroEstates';
import { PomodoroStates } from './Estate/PomodoroEstates';
import { formatToApresent, getLocalStorageItem } from './helpers';
import { useDrawer } from './hooks/useDrawer.hook';

const initialTimer = Number(getLocalStorageItem('focusTime')) || 0;

function App() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const [currentTimer, setCurretTimer] = useState<number>(initialTimer);
  const setInitialTimer = () =>
    setCurretTimer(Number(getLocalStorageItem('focusTime')));

  const [viewMessages, setViewMessages] = useState<viewMessages>({
    buttonTextBeforeCount: 'Start',
    buttonTextAfterCount: 'Pause',
    messageOnCountdown: 'Focus',
    messageAfterCountdown: `Time's up. Rest a little`,
    nextStageOnCount: 'pause',
    nextStageAfterCount: 'shortRest',
  });
  const updateViewMessages = (messages: viewMessages) =>
    setViewMessages(messages);

  const pomodoroStates = useMemo(
    () => new PomodoroStates(updateViewMessages),
    [],
  );

  const [timer, setTimer] = useState<any>();
  const playTimer = () => {
    const timerInterval = setInterval(() => {
      setCurretTimer((current) => {
        if (current === 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    setTimer(timerInterval);
  };
  const handlerPause = () => {
    clearInterval(timer);
    setTimer(undefined);
  };
  const toggleTimer = () => {
    timer === undefined ? playTimer() : handlerPause();
  };

  return (
    <div className="text-gray-300 pt-12 md:pt-4 font-mono h-screen">
      <h1 className="text-center fs-3 mb-8">Pomodoro</h1>

      <GearButton toggleDrawer={toggleDrawer} />
      <Form
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        setInitialTimer={setInitialTimer}
      />

      <div className="w-[85%] h-3/5 sm:h-3/4 bg-gray-300/25 rounded-2xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <p
          className="fs-4 grow flex justify-center items-center opacity-90"
          id="timer"
        >
          {`${formatToApresent(currentTimer)}`}
        </p>

        <button
          disabled={isDrawerOpen}
          className={classNames({
            'w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase': true,
            'bg-[#602020] cursor-pointer': !isDrawerOpen,
            'bg-[#ccc] cursor-not-allowed': isDrawerOpen,
          })}
          id="control-button"
          onClick={toggleTimer}
        >
          {viewMessages.buttonTextBeforeCount}
        </button>

        <p className="whitespace-pre-wrap fs-1 font-semibold" id="notice-user">
          {viewMessages.messageOnCountdown}
        </p>

        <p className="cycles fs-1 font-light" id="cycles">
          0
        </p>
      </div>
    </div>
  );
}

export default App;
