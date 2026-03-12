import Hero        from "../components/home/Hero";
import Stats       from "../components/home/Stats";
import ProjectGrid from "../components/projects/ProjectGrid";
import ServiceCard from "../components/services/ServiceCard";

export default function Home() {
  return (
    <>
      <Hero />                              {/* Grande section accueil */}
      <Stats />                             {/* 15ans / 120 projets / 8 prix */}
      <ProjectGrid limit={5} showHeader />  {/* 5 projets depuis MongoDB */}
      <ServiceCard />                       {/* Services depuis MongoDB */}
    </>
  );
}