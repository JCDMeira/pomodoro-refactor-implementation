import { useEffect, useState } from 'react';

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((current) => !current);

  useEffect(() => {
    const onEscape = (e: globalThis.KeyboardEvent) => {
      e.key === 'Escape' ? setIsDrawerOpen(false) : '';
    };

    document.addEventListener('keydown', (e) => onEscape(e));

    return document.removeEventListener('keydown', (e) => onEscape(e));
  }, []);

  return { isDrawerOpen, toggleDrawer };
};
