"use client";
import { useEffect, useState } from "react";
import HomePage from "@/screens/Home";
import { HomePageData } from "@/types";

export default function Home() {
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main>
      <HomePage />
    </main>
  );
}
