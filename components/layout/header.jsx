import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import {
  User,
  LogOut,
} from 'lucide-react';
import ToggleTheme from './toggle-theme';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center font-extrabold text-xl">
          <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/PriskoJrMod.png" alt="Prisko Jr Mod Logo" width={30} height={30} />
          <span className="ms-2">Prisko Jr Mod</span>
        </Link>
        <div className="flex gap-2.5 items-center h-9">
          <ToggleTheme />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-start text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-200 outline-0 gap-1">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/profile.png" alt="Profile" width={30} height={30} className="rounded-full me-1" />
                <h5 className="font-medium leading-none">Reza</h5>
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-45 [&_a]:hover:cursor-pointer" align="end">
              <DropdownMenuItem asChild>
                <Link href=""><User /> Profile Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="" className="focus:bg-red-50"><LogOut /> Sign Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
