'use client';

import { useTheme } from 'next-themes';
import {
  Moon,
  Sun,
} from 'lucide-react';
import { Button } from '../ui/button';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={handleTheme}
      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-200"
    >
      <Sun className="hidden dark:inline-block" />
      <Moon className="inline-block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
