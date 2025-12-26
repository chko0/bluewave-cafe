import AnnouncementSection from "../components/home/AnnouncementSection";
import HeroSection from "../components/home/HeroSection";
import LocationSection from "../components/home/LocationSection";
import SpecialtyItemsSection from "../components/home/SpecialtyItemsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyUsSection from "../components/home/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnnouncementSection />
      <SpecialtyItemsSection />
      <TestimonialsSection />
      <LocationSection />
      <WhyUsSection />
    </>
  );
}
