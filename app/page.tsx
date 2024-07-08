"use client";
import { useEffect } from "react";
import HomePage from "@/screens/Home";
// import "locomotive-scroll/dist/locomotive-scroll.css";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <HomePage />
    </main>
  );
}
