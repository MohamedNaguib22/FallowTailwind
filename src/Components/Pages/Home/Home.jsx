import { Clients } from "./ClientsSection";
import Connect from "./ConnectSection/Connect";
import { CopyRight } from "./CopyRight";
import Customers from "./CustomersSection/Customers";
import Exploring from "./Exploring/Exploring";
import Footer from "./Footer/Footer";
import { HeroSection } from "./HeroSection";
import { Marking } from "./Marking";
import { Product } from "./Product";
import { Projects } from "./Projects";
import { Sharing } from "./ShareSection";
import Skills from "./Skills/Skills";
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <Product />
        <Exploring />
        <Marking />
        <div className="OneSection pt-[50px] pb-[80px] h-fit bg-cover bg-no-repeat ">
          <Projects />
        </div>
        <div className="TwoSection pb-[80px] h-fit bg-cover bg-no-repeat">
          <Customers />
          <Clients />
        </div>
        <Connect />
        <Sharing />
        <Skills />
        <Footer />
        <CopyRight />
      </div>
    </>
  );
};

export default Home;
