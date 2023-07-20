import Home from "./Components/Pages/Home/Home";
import HeaderNav from "../src/Components/Pages/Home/HeaderNav/HeaderNav";
import Navbar from "../src/Components/Pages/Home/Navbar/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);
  return (
    <>
      <HeaderNav />
      <Navbar />
      <Home />
    </>
  );
}
