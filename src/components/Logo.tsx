// src/components/Logo.tsx
'use client';

export const Logo = () => (
  <svg
    width="150"
    height="60"
    viewBox="0 0 160 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
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
    <rect width="160" height="65" fill="white"/>
    <text x="5" y="40" className="logo-text-1">1</text>
    <text x="25" y="40" className="logo-text-movil">M</text>
    <g transform="translate(57, 40)">
        <text x="0" y="0" className="logo-text-o" textAnchor="middle">ø</text>
    </g>
    <text x="70" y="40" className="logo-text-movil">vil</text>
    <text x="70" y="55" className="logo-text-tagline" textAnchor="end">movimiento seguro</text>
  </svg>
);
