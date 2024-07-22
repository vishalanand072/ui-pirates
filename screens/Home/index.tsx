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
import DivAnimation from "./animation.tsx/divAnimation";
import TimeLinePaga from "./animation.tsx/timeline";
import InternPage from "./InternsPage";
import OurWork from "./animation.tsx/ourWork";
import GreatIdea from "./greatIdea";
import FormLayout from "./form/formLayout";
import FooterPage from "./footer.tsx";
const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroImage />
      {/* <HeroComp /> */}
      <ScrollSection />

      <div>
        {/* <DivAnimation /> */}

        <TimeLinePaga />
      </div>

      <DivScroll />

      <OurWork />

      {/* <VideoCarousel /> */}
      {/* <HomeHero />
            <HomeCard /> */}
      {/* <Hero />
      <ScrollSection /> */}
      <ReviewPage />
      {/* <OurWork /> */}
      <GreatIdea />
      <FormLayout />
      <InternPage></InternPage>
    </>
  );
};

export default HomePage;
