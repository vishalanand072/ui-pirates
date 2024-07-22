import Hero from "./hero";
import AboutUIpirates from "./about-ui-pirate";
import TimeLinePaga from "./timeline";
import DesignDev from "./designDev";
import OurWork from "./ourWork";
import ReviewPage from "./reviews";
import GreatIdea from "./greatIdea";
import FormLayout from "./form/formLayout";
import InternPage from "./InternsPage";
import ClientOverview from "../CaseStudy/ClientOverview";
import OurRole from "../CaseStudy/OurRole";

const HomePage = () => {
  return (
    <>
      <Hero />

      <AboutUIpirates />

      <TimeLinePaga />

      <DesignDev />

      <OurWork />

      <ReviewPage />

      <GreatIdea />

      <FormLayout />
      <FooterPage></FooterPage>
    </>
  );
};

export default HomePage;
