'use client';

import { useSidebar } from '../ui/sidebar';
import { Button } from '../ui/button';
import { PanelLeft } from 'lucide-react';

export default function SidebarTriggerPJM() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 px-4 py-2"
      onClick={toggleSidebar}
    >
      <PanelLeft />
    </Button>
  );
}
