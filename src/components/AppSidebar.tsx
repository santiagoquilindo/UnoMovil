// src/components/AppSidebar.tsx
'use client';
import { SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

export function AppSidebar() {
  return (
    <>
      <SidebarHeader className="flex items-center justify-between p-4 sm:justify-start sm:gap-4">
        <Logo />
        <div className="flex-grow" />
        <SidebarTrigger asChild className="sm:hidden">
            <Button size="icon" variant="outline">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </SidebarTrigger>
      </SidebarHeader>
    </>
  );
}
