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

  const setNewStageTimer = (key: 'focusTime' | 'shortRest') =>
    setCurretTimer(Number(getLocalStorageItem(key)));

  const seconds = currentTimer % 60;
  const minutes = Math.trunc(currentTimer / 60);

  const [viewMessages, setViewMessages] = useState<viewMessages>({
    buttonText: 'Start',
    noticeToUser: 'Focus',
    nextStage: 'Pause',
    messageAfterCountdown: `Time's up. Rest a little`,
    buttonTextAfterCountdown: 'shortRest',
  });
  const updateViewMessages = (messages: viewMessages) =>
    setViewMessages(messages);

  useEffect(() => {
    if (viewMessages.buttonText === 'shortRest')
      setNewStageTimer(viewMessages.buttonText);
  }, [viewMessages.buttonText]);

  const pomodoroStates = useMemo(
    () => new PomodoroStates(updateViewMessages),
    [],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurretTimer((current) => current - 1);
    }, 1000);

    if (currentTimer === 0) {
      clearInterval(timer);
      pomodoroStates.nextState();
    }

    return () => clearInterval(timer);
  }, [currentTimer, pomodoroStates]);

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
          {`${formatToApresent(minutes)}:${formatToApresent(seconds)}`}
        </p>

        <button
          disabled={isDrawerOpen}
          className={classNames({
            'w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase': true,
            'bg-[#602020] cursor-pointer': !isDrawerOpen,
            'bg-[#ccc] cursor-not-allowed': isDrawerOpen,
          })}
          id="control-button"
        >
          {viewMessages?.buttonText}
        </button>

        <p className="whitespace-pre-wrap fs-1 font-semibold" id="notice-user">
          {viewMessages?.noticeToUser}
        </p>

        <p className="cycles fs-1 font-light" id="cycles">
          0
        </p>
      </div>
    </div>
  );
}

export default App;
