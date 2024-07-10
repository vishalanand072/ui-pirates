import HomeHero from "./hero";
import HomeCard from "./card";
import MinimalInvolvementCard from "./MinimalInvolvementCard";

const Home: React.FC = () => {
  return (
    <div>
      <MinimalInvolvementCard />
    </div>
  );
}

const HomePage = () => {
    return (
        <>
            <HomeHero />
            <HomeCard />
        </>
    )
}

export default HomePage;