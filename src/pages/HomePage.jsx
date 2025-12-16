import AnnouncementSection from "../components/home/AnnouncementSection";
import HeroSection from "../components/home/HeroSection";
import LocationSection from "../components/home/LocationSection";
import SpecialtyItemsSection from "../components/home/SpecialtyItemsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <section>
      <HeroSection />
      <AnnouncementSection />
      <SpecialtyItemsSection />
      <TestimonialsSection />
      <LocationSection />
    </section>
  );
}
