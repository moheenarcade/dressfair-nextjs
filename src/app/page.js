import DressfairFriday from "@/components/homePageComponent/DressFairFriday";
import HeroSection from "@/components/homePageComponent/heroSection";
import LightingDeals from "@/components/homePageComponent/lightingDeals";
import WhyChooseDressfair from "@/components/homePageComponent/whyChooseDressfair";

const Home = () => {

  return (
    <div className="homePage">
       <HeroSection />
       <WhyChooseDressfair />
       <LightingDeals />
       <DressfairFriday />
    </div>
  );
}

export default Home;
