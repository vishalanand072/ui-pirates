import Hero from "./hero";
import AboutUIpirates from "./about-ui-pirate";
import TimeLinePaga from "./timeline";
import DesignDev from "./designDev";
import OurWork from "./ourWork";
import ReviewPage from "./reviews";
import GreatIdea from "./greatIdea";
import FormLayout from "./form/formLayout";
import InternPage from "./InternsPage";

const HomePage = () => {
  return (
    <>
      <Hero />

      <div className="button-container-1 animate__animated animate__fadeInUp animate__slow animate__delay-4s">
        <span className="mas">Get Transformed</span>
        <button id="work" type="button" name="Hover">
          Contact Us
        </button>
      </div>

      <AboutUIpirates />

      <TimeLinePaga />

      <DesignDev />

      <OurWork />

      <ReviewPage />

      <GreatIdea />

      <FormLayout />

      <InternPage />
    </>
  );
};

export default HomePage;
