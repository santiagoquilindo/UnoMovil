// src/components/AppSidebar.tsx
'use client';
import { SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { Logo } from '@/components/Logo';

export function AppSidebar() {
  return (
    <>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Logo />
        <SidebarTrigger />
      </SidebarHeader>
    </>
  );
}
