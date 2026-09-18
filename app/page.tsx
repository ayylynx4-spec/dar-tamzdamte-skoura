import { HeroSection } from "@/components/home/HeroSection";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { HouseSection } from "@/components/home/HouseSection";
import { TeaMomentSection } from "@/components/home/TeaMomentSection";
import { DayAtTamzdamteSection } from "@/components/home/DayAtTamzdamteSection";
import { KitchenSection } from "@/components/home/KitchenSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { RoomsSection } from "@/components/home/RoomsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <main className="bg-stone text-clay">
      <HeroSection />
      <WelcomeSection />
      <HouseSection />
      <TeaMomentSection />
      <DayAtTamzdamteSection />
      <KitchenSection />
      <ExperiencesSection />
      <RoomsSection />
      <FinalCtaSection />
    </main>
  );
}
