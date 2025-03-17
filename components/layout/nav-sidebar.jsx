import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../ui/sidebar';
import Link from 'next/link';
import NavItemCollapsible from './nav-item-collapsible';
import { Fragment } from 'react';

export default function NavSidebar({ items, collapsibleItems }) {
  return (
    <SidebarMenu className="p-2">
      {items.map(item => {
        if (item.title === 'Transactions') {
          return (
            <Fragment key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <NavItemCollapsible item={collapsibleItems[0]} />
            </Fragment>
          );
        }
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
      <NavItemCollapsible item={collapsibleItems[1]} />
    </SidebarMenu>
  );
}
