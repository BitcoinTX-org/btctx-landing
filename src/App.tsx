import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InstallMethods from "./components/InstallMethods";
import Dashboard from "./components/Dashboard";
import HowItWorks from "./components/HowItWorks";
import TechStack from "./components/TechStack";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <Hero />
      <Features />
      <InstallMethods />
      <Dashboard />
      <HowItWorks />
      <TechStack />
      <FinalCTA />
      <Footer />
    </div>
  );
}
