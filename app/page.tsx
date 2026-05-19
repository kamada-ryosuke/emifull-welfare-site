import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Hero } from "@/components/sections/Hero";
import {
  HomeAboutGateway,
  HomeBrandGateway,
  HomeConsultationGateway,
  HomeFacilityGateway,
  HomeLifeStageGateway,
  HomeRecruitGateway,
  HomeServiceGateway
} from "@/components/sections/HomeGateways";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeConsultationGateway />
      <HomeFacilityGateway />
      <HomeServiceGateway />
      <HomeBrandGateway />
      <HomeLifeStageGateway />
      <HomeRecruitGateway />
      <HomeAboutGateway />
      <FinalCtaSection />
    </main>
  );
}
