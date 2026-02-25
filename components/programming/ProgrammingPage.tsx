import ProgrammingHero from "./ProgrammingHero";
import ProgrammingPillars from "./ProgrammingPillars";
import ProgrammingInnovators from "./ProgrammingInnovators";
import ProgrammingStats from "./ProgrammingStats";
import ProgrammingCourseRoadmap from './ProgrammingCourseRoadmap';
import ProgrammingPricingSection from "./ProgrammingPricingSection";
import ProgrammingCompetition from "./ProgrammingCompetition";
import ConsultationCTA from "./ConsultationCTA";
export default function ProgrammingPage() {
  return (
    <main className="font-outfit">
        
      <ProgrammingHero />
      <ProgrammingPillars />
      <ProgrammingInnovators />
      <ProgrammingStats />
      <ProgrammingCourseRoadmap />
      <ProgrammingPricingSection/>
      <ProgrammingCompetition/>
      <ConsultationCTA/>
    </main>
  );
}