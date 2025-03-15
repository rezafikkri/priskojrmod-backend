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
} from '../ui/sidebar';
import Category from '../icon/category';
import Key from '../icon/key';
import LockPassword from '../icon/lock-password';
import NavSidebarGroup from './nav-sidebar-group';
import NavSidebar from './nav-sidebar';
import UserDollar from '../icon/user-dollar';
import Script from '../icon/script';

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
    <Sidebar className="top-(--header-height) !h-[calc(100svh-var(--header-height))]">
      <SidebarContent className="ps-4 pe-1 pt-4 pb-2">
        <NavSidebar items={items.nav} collapsibleItems={items.document} />
        <NavSidebarGroup label="Product" items={items.product} />
        <NavSidebarGroup label="Application" items={items.application} />
      </SidebarContent>
    </Sidebar>
  )
}

