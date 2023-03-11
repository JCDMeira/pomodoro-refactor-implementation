import { useEffect, useMemo, useState } from 'react';
import Form from './Components/Form';
import GearButton from './Components/GearButton';
import classNames from 'classnames';
import './index.css';
import { viewMessages } from './Estate/PomodoroEstates/IPomodoroEstates';
import { PomodoroStates } from './Estate/PomodoroEstates';
import { formatToApresent, getLocalStorageItem } from './helpers';
import { useDrawer } from './hooks/useDrawer.hook';

function App() {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const [viewMessages, setViewMessages] = useState<viewMessages>({
    currentTimer: Number(getLocalStorageItem('focusTime')),
    buttonTextBeforeCount: 'Start',
    buttonTextAfterCount: 'Pause',
    messageOnCountdown: 'Focus',
    messageAfterCountdown: `Time's up. Rest a little`,
    nextStage: 'rest',
    cycle: 1,
    clickOnCount: 'pause',
  });
  const updateViewMessages = (messages: viewMessages) =>
    setViewMessages(messages);

  const setInitialTimer = () =>
    setViewMessages({
      ...viewMessages,
      currentTimer: Number(getLocalStorageItem('focusTime')),
    });

  const pomodoroStates = useMemo(
    () => new PomodoroStates(updateViewMessages),
    [],
  );

  const [timer, setTimer] = useState<any>();

  const playTimer = () => {
    const timerInterval = setInterval(() => {
      setViewMessages((current) => {
        if (current.currentTimer === 0) {
          clearInterval(timerInterval);
          return { ...current, currentTimer: 0 };
        }

        return { ...current, currentTimer: current.currentTimer - 1 };
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

  useEffect(() => {
    if (viewMessages.currentTimer === 0) {
      pomodoroStates.nextState();
      console.log(viewMessages.nextStage);

      clearInterval(timer);
      setTimer(undefined);
    }
  }, [
    viewMessages.currentTimer,
    pomodoroStates,
    timer,
    viewMessages.nextStage,
  ]);

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
          {`${formatToApresent(viewMessages.currentTimer)}`}
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
          {timer === undefined
            ? viewMessages.buttonTextBeforeCount
            : viewMessages.buttonTextAfterCount}
        </button>

        {
          <p
            className="whitespace-pre-wrap fs-1 font-semibold"
            id="notice-user"
          >
            {viewMessages.currentTimer === 0
              ? viewMessages.messageAfterCountdown
              : viewMessages.messageOnCountdown}
          </p>
        }

        <p className="cycles fs-1 font-light" id="cycles">
          {viewMessages?.cycle || 1}
        </p>
      </div>
    </div>
  );
}

export default App;
