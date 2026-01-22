import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import MathHero from '@/components/math/MathHero';
import MathTeachingPhilosophy from '@/components/math/MathTeachingPhilosophy';
import MeetOurFaculty from '@/components/math/MeetOurFaculty';
import PreAMCProgram from '@/components/math/PreAMCProgram';
import SevenStepsMethod from '@/components/math/SevenStepsMethod';
import PricingSection from '@/components/math/PricingSection';
import LimitedTimeOffer from '@/components/math/LimitedTimeOffer';
import MathArtPlayDay from '@/components/math/MathArtPlayDay';
import UnlockPotential from '@/components/math/UnlockPotential';
import ScheduleConsultation from '@/components/math/ScheduleConsultation';

export default function MathPage() {
  return (
    <>
      <Navigation />
      <MathHero />
      <MathTeachingPhilosophy />
      <MeetOurFaculty />
      <PreAMCProgram />
      <SevenStepsMethod />
      <PricingSection />
      <LimitedTimeOffer />
      <MathArtPlayDay />
      <UnlockPotential />
      <ScheduleConsultation />
      <Footer />
    </>
  );
}