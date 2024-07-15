import HomeHero from "./hero";
import HomeCard from "./card";
import Hero from "./animation.tsx/Hero";
import ReviewPage from "./reviews";
// import ScrollAnimation from "./animation.tsx/rightScroll";
import ScrollSection from "./animation.tsx/rightScroll";
import VideoCarousel from "./animation.tsx/videoCarosal";
import DivScroll from "./animation.tsx/divScroll";
import HeroImage from "./animation.tsx/HeroImage";
import Dan from "./animation.tsx/Descriotion";
import InternPage from "./InternsPage";
const HomePage = () => {
  return (
    <>
      <HeroImage />
      {/* <Hero /> */}

      {/* <Dan /> */}
      <ScrollSection />

      <VideoCarousel />
      {/* <DivScroll /> */}
      {/* <HomeHero />
            <HomeCard /> */}
      {/* <Hero />
      <ScrollSection /> */}
      <ReviewPage />
      <InternPage></InternPage>
      
    </>
  );
};

export default HomePage;
