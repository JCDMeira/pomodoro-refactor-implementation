import { useEffect, useMemo, useState } from 'react';
import { PomodoroStates } from '../Estate/PomodoroEstates';
import { viewMessages } from '../Estate/PomodoroEstates/IPomodoroEstates';
import { getLocalStorageItem } from '../helpers';
import { defaultState } from '../Estate/PomodoroEstates/StartState';

export const usePomodoro = () => {
  const [viewMessages, setViewMessages] = useState<viewMessages>(defaultState);
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

  return { setInitialTimer, toggleTimer, timer, viewMessages };
};
