"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightlightsSlides } from "../../../constants"; // Adjust the import path

gsap.registerPlugin(ScrollTrigger);

interface VideoState {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
}

interface LoadedDataEvent extends Event {
  target: HTMLVideoElement;
}

const VideoCarousel: React.FC = () => {
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);
  const videoSpanRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoDivRef = useRef<(HTMLSpanElement | null)[]>([]);

  const [video, setVideo] = useState<VideoState>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<LoadedDataEvent[]>([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        if (videoRef.current[videoId]) {
          anim.progress(
            videoRef.current[videoId]!.currentTime /
              hightlightsSlides[videoId].videoDuration
          );
        }
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        startPlay && videoRef.current[videoId]?.play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type: string, i: number) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1 >= hightlightsSlides.length ? 0 : i + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((prev) => ({ ...prev, videoId: -4, isLastVideo: false }));
        break;
      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i: number, e: LoadedDataEvent) =>
    setLoadedData((prev) => [...prev, e]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLastVideo) {
        handleProcess("video-end", videoId);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [videoId, isLastVideo]);

  return (
    <div className="mainDiv ">
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  className={`${
                    list.id === 2 ? "translate-x-44" : ""
                  } pointer-events-none`}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last", 0)
                  }
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) =>
                    handleLoadedMetaData(i, e as unknown as LoadedDataEvent)
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
              onClick={() => handleProcess("video-end", i)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
