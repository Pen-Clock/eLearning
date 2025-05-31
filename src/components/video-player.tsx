"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  // Use separate refs if you plan to fully control both native video and YouTube iframe later
  // const nativeVideoRef = useRef<HTMLVideoElement>(null);
  // const youtubeIframeRef = useRef<HTMLIFrameElement>(null);

  // For now, we'll keep the videoRef but acknowledge its limitations for YouTube
  const videoRef = useRef<HTMLVideoElement>(null);


  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const isYouTube = videoUrl.includes("youtube.com/embed/");

  useEffect(() => {
    if (isYouTube) {
      // No native video event listeners needed for YouTube iframe
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const videoEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", videoEnded);

    // Clean up native video event listeners when component unmounts or videoUrl changes
    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", videoEnded);
    };
  }, [videoUrl, isYouTube]); // Dependency array should include videoUrl and isYouTube


  // Reset state when videoUrl changes
  useEffect(() => {
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setIsMuted(false);
      setVolume(1);
  }, [videoUrl]);


  const togglePlay = () => {
    if (isYouTube) {
      // To control YouTube playback, you'd need the YouTube Iframe Player API.
      // For a basic embed, the user will use YouTube's built-in controls.
      // We can still toggle our internal state to update the button icon,
      // but it won't affect playback.
      console.warn("Play/pause control for YouTube requires Iframe Player API.");
      setIsPlaying(!isPlaying);
    } else {
      const video = videoRef.current;
      if (!video) return;

      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

const handleTimeChange = (value: number[]) => {
  if (isYouTube) {
    console.warn("Time scrubbing for YouTube requires Iframe Player API.");
    return;
  }
  const video = videoRef.current;
  if (!video || !value.length) return;

  const newTime = value[0];
  if (typeof newTime === 'number') {
    video.currentTime = newTime;
    setCurrentTime(newTime);
  }
};

  const toggleMute = () => {
    if (isYouTube) {
       console.warn("Mute toggle for YouTube requires Iframe Player API.");
       setIsMuted(!isMuted); // Update state for the button icon
       // You'd use player.setVolume(0) or player.setVolume(currentVolume) with the API
       return;
     }
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
    if (video.muted) setVolume(0); // Reflect muted state in volume slider
  };

const handleVolumeChange = (value: number[]) => {
  if (isYouTube) {
    console.warn("Volume control for YouTube requires Iframe Player API.");
    if (!value.length) return;
    
    const newVolume = value[0];
    if (typeof newVolume === 'number') {
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
    return;
  }

  const video = videoRef.current;
  if (!video || !value.length) return;

  const newVolume = value[0];
  if (typeof newVolume === 'number') {
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  }
};

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00"; // Handle NaN or Infinity duration
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative flex-1 bg-black rounded-md overflow-hidden">
        {/* CONDITIONAL RENDERING IS KEY HERE */}
        {isYouTube ? (
          <iframe
            // No ref for iframe needed for basic embed
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            onClick={togglePlay} // Basic click to toggle play for native video
          />
        )}
      </div>

      {/* Show controls only for native videos or if you implement YouTube API control */}
      {!isYouTube && (
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            {/* Play/Pause button */}
            <Button variant="ghost" size="icon" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            {/* Current time */}
            <div className="text-sm text-muted-foreground w-16">{formatTime(currentTime)}</div>

            {/* Progress slider */}
            <Slider
              value={[currentTime]}
              max={duration || 0} // Use 0 if duration is not available yet
              step={0.1}
              onValueChange={handleTimeChange}
              className="flex-1"
            />

            {/* Duration */}
            <div className="text-sm text-muted-foreground w-16 text-right">{formatTime(duration)}</div>

            {/* Mute/Volume button */}
            <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>

            {/* Volume slider */}
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
       )}

       {/* Optional: Add a message or different controls for YouTube */}
        {isYouTube && (
            <div className="mt-4 text-sm text-muted-foreground text-center">
                Use the video player controls provided by YouTube.
            </div>
        )}

    </div>
  );
}
