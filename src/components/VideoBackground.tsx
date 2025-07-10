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
        >
            <source src="https://videos.pexels.com/video-files/8560184/8560184-hd_1920_1080_24fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};
