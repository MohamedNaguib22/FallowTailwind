import { Clients } from "./ClientsSection";
import Customers from "./CustomersSection/Customers";
import Exploring from "./Exploring/Exploring";
import { HeroSection } from "./HeroSection";
import { Marking } from "./Marking";
import { Product } from "./Product";
import { Projects } from "./Projects";
const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
