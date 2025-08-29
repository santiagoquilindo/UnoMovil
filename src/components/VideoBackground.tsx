// src/components/VideoBackground.tsx
'use client';

export const VideoBackground = () => {
    return (
        <video
            id="background-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/uno_movil.png"  // opcional, puedes quitarlo si no quieres imagen de espera
            className="absolute inset-0 w-full h-full object-cover -z-10"
        >
            <source src="/fondo.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
        </video>
    );
};
