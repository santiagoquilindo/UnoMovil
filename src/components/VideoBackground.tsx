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
            <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};
