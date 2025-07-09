import { Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Rocket className="h-8 w-8" />
          <h1 className="text-xl font-bold tracking-tight">Popayán Go</h1>
        </div>
      </div>
    </header>
  );
}
