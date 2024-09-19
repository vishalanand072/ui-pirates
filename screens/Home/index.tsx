import Hero from "./hero";
import WeCreate from "./weCreate";
import AboutUIpirates from "./about-ui-pirate";
import TimeLinePaga from "./timeline";
import DesignDev from "./designDev";
import OurWork from "./ourWork";
import ReviewPage from "./reviews";
import GreatIdea from "./greatIdea";
import FormLayout from "./form/formLayout";
import InternPage from "./InternsPage";
import ScrollSnap from "./scrollSnapExample";
import ScrollSnapFol from "./ScrollSnap";
import ShoeNike from "../shoePage.tsx";
import { HomePageData } from "../../types";

const HomePage = () => {
  return (
    <>
      <Hero hero_heading="" hero_subHeading="" />

      {/* <WeCreate /> */}
      {/* <ScrollSnap /> */}
      <ScrollSnapFol />
      {/* <ShoeNike></ShoeNike> */}
      <TimeLinePaga />
      <div className="max-md:hidden">
        <DesignDev />
      </div>

      <OurWork />

      <ReviewPage />

      <AboutUIpirates />

      <GreatIdea />

      <FormLayout />

      {/* <InternPage /> */}
    </>
  );
};

export default HomePage;
