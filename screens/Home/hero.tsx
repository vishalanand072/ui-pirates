import React from "react";
import { Image } from "@nextui-org/react";

export default function HomeHero() {
    return (
        <>
            <div className="h-screen flex flex-row items-center justify-between">
                <div className="w-[60%]">
                    <h2>WHERE CREATIVITY MEETS FUNCTIONALITY</h2>
                    <p>Come aboard as we sail the seas of creativity and innovation, turning your digital dreams into invaluable treasures.</p>
                </div>
                <div className="w-[40%]">
                    <Image src="assets/home/hero/hero.svg" width={400} />
                </div>
            </div>
        </>
    );
}
