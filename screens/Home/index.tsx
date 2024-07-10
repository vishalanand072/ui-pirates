import HomeHero from "./hero";
import HomeCard from "./card";
// import Hero from "./animation.tsx/Hero";
import HeroComp from "./hero/heroComp";
import ReviewPage from "./reviews";
import ScrollSection from "./animation.tsx/rightScroll";
import VideoCarousel from "./animation.tsx/videoCarosal";
import DivScroll from "./animation.tsx/divScroll";
import HeroImage from "./animation.tsx/HeroImage";
import Dan from "./animation.tsx/Descriotion";
import Hero from "./hero/index";
const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroImage />
      {/* <HeroComp /> */}

      {/* <Dan /> */}
      <ScrollSection />

      <VideoCarousel />
      {/* <DivScroll /> */}
      {/* <HomeHero />
            <HomeCard /> */}
      {/* <Hero />
      <ScrollSection /> */}
      <ReviewPage />
    </>
  );
};
// import Hero from "./hero/index";
// const HomePage = () => {
//   return (
//     <>
//       {/* <HomeHero /> */}
//       {/* <HomeCard /> */}
//       <Hero />
//     </>
//   );
// };

export default HomePage;
