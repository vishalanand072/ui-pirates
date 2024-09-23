import Hero from "./hero";
import AboutUIpirates from "./about-ui-pirate";
import TimeLinePaga from "./timeline";
import DesignDev from "./designDev";
import OurWork from "./ourWork";
import ReviewPage from "./reviews";
import GreatIdea from "./greatIdea";
import FormLayout from "./form/formLayout";
import ScrollSnapFol from "./ScrollSnap";

const HomePage = () => {
  return (
    <>
      <Hero hero_heading="" hero_subHeading="" />

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
