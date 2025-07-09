import Image from 'next/image';

const Logo = () => (
  <svg
    width="150"
    height="60"
    viewBox="0 0 150 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap');
      .logo-text-1 {
        font-family: 'Kalam', cursive;
        font-size: 38px;
        fill: #E5332A;
      }
      .logo-text-movil {
        font-family: 'Kalam', cursive;
        font-size: 38px;
        fill: black;
      }
      .logo-text-o {
        font-family: 'Kalam', cursive;
        font-size: 38px;
        fill: #E5332A;
      }
      .logo-text-tagline {
        font-family: 'Kalam', cursive;
        font-size: 12px;
        fill: black;
      }
    `}
    </style>
    <rect width="150" height="60" fill="white"/>
    <text x="0" y="40" className="logo-text-1">1</text>
    <text x="20" y="40" className="logo-text-movil">M</text>
    <g transform="translate(52, 40)">
        <text x="0" y="0" className="logo-text-o" textAnchor="middle">ø</text>
    </g>
    <text x="65" y="40" className="logo-text-movil">vil</text>
    <text x="65" y="55" className="logo-text-tagline">movimiento seguro</text>
  </svg>
);


export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
           <Logo />
        </div>
      </div>
    </header>
  );
}
