import {
  Copyright,
  Users,
  Package,
  Activity,
  DatabaseBackup,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '../ui/sidebar';
import Link from 'next/link';
import Category from '../icon/category';
import Key from '../icon/key';
import LockPassword from '../icon/lock-password';
import NavSidebarGroup from './nav-sidebar-group';
import NavSidebar from './nav-sidebar';
import UserDollar from '../icon/user-dollar';
import Script from '../icon/script';
import { NavUser } from './nav-user';

// Menu items.
const items = {
  nav: [
    { title: 'Transactions', url: '/transactions', icon: Activity },
    { title: 'Customers', url: '/customers', icon: UserDollar },
    { title: 'Backup', url: '/backup', icon: DatabaseBackup },
  ],
  document: {
    title: 'Document',
    icon: Script,
    subItems: [
      { title: 'T&C', url: '/tnc', },
      { title: 'Privacy Policy', url: '/pp' },
      { title: 'About Us', url: '/about' },
      { title: 'FAQ', url: '/faq' },
    ],
  },
  product: [
    { title: 'Categories', url: '/categories', icon: Category },
    { title: 'Licenses', url: '/licenses', icon: Copyright },
    { title: 'Owners', url: '/owners', icon: Users },
    { title: 'Products', url: '/products', icon: Package },
  ],
  application: [
    { title: 'Secret Key', url: '#', icon: LockPassword },
    { title: 'License Key', url: '#', icon: Key },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="h-full">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center gap-2">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/PriskoJrMod.png" alt="Prisko Jr Mod Logo" width={25} height={25} />
                <span className="font-semibold">Prisko Jr Mod</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSidebar items={items.nav} collapsibleItems={items.document} />
        <NavSidebarGroup label="Product" items={items.product} />
        <NavSidebarGroup label="Application" items={items.application} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}

