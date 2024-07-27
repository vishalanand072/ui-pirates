"use client";
import { useEffect, useState } from "react";
import HomePage from "@/screens/Home";
import { HomePageData } from "@/types";

export default function Home() {
  const [data, setData] = useState<HomePageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ui-pirates-backend.onrender.com/api/homes?populate[hero_Heading][populate]=*&populate[hero_subHeading][populate]=*&populate[about_ui_pirates][populate]=*&populate[work_process][populate]=*&populate[our_works][populate]=our_works.img"
        );
        const result = await response.json();
        setData(result.data[0].attributes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Initialize Locomotive Scroll
    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    initializeScroll();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <main>{data && <HomePage data={data} />}</main>;
}
