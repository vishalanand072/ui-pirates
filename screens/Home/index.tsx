import HomeHero from "./hero";
import HomeCard from "./card";
import Hero from "./animation.tsx/Hero";
// import ScrollAnimation from "./animation.tsx/rightScroll";
import ScrollSection from "./animation.tsx/rightScroll";
const HomePage = () => {
  return (
    <>
      {/* <HomeHero />
            <HomeCard /> */}
      <Hero />
      <ScrollSection />
    </>
  );
};

export default HomePage;
