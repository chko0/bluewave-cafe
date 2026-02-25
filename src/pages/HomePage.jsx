import {
  HeroSection,
  AnnouncementSection,
  SpecialtyItemsSection,
  TestimonialsSection,
  LocationSection,
  WhyUsSection,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://maps.gstatic.com" />
      <link rel="preload" href="cafe-interior.webp" as="image" />
      <HeroSection />
      <AnnouncementSection />
      <SpecialtyItemsSection />
      <TestimonialsSection />
      <LocationSection />
      <WhyUsSection />
    </>
  );
}
