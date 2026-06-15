import TutoringHero from '@/components/tutoring/TutoringHero';
import TestimonialsSection from '@/components/tutoring/TestimonialsSection';
import StudentSection from '@/components/tutoring/StudentSection';
import TutorSection from '@/components/tutoring/TutorSection';
import StudentForm from '@/components/tutoring/StudentForm';
import TutorForm from '@/components/tutoring/TutorForm';

export default function TutoringPage() {
  return (
    <main className="font-outfit">
      <TutoringHero />
      <TestimonialsSection />
      <StudentSection />
      <TutorSection />
      <StudentForm />
      <TutorForm />
    </main>
  );
}
