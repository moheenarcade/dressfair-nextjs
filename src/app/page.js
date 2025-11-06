import HeroSection from "@/components/homePageComponent/heroSection";
import LightingDeals from "@/components/homePageComponent/lightingDeals";
import WhyChooseDressfair from "@/components/homePageComponent/whyChooseDressfair";

const Home = () => {

  return (
    <div className="homePage">
       <HeroSection />
       <WhyChooseDressfair />
       <LightingDeals />
    </div>
  );
}

export default Home;
