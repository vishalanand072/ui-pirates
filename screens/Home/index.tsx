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

import { HomePageData } from "../../types";

interface HomePageProps {
  data: HomePageData;
}

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <>
      <Hero
        hero_heading={data.hero_heading}
        hero_subHeading={data.hero_subHeading}
      />

      {/* <div className="flex flex-row">
        <div className="button-container-1 animate__animated animate__fadeInUp animate__slow animate__delay-4s">
          <span className="mas">Transformeddan</span>
          <button id="work" type="button" name="Hover">
            Transformeddan
          </button>
        </div>
      </div> */}

      <WeCreate />

      <TimeLinePaga workProcess={data.work_process} />

      <DesignDev />

      <OurWork ourWorks={data.our_works.data} />

      <ReviewPage />

      <AboutUIpirates about={data.about_ui_pirates} />

      <GreatIdea />

      <FormLayout />

      <InternPage />
    </>
  );
};

export default HomePage;
