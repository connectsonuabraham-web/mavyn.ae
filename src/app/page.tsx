import HomeHero from "@/components/HomeHero";
import TrustChipsMarquee from "@/components/TrustChipsMarquee";
import AboutPreview from "@/components/AboutPreview";
import AssistSection from "@/components/AssistSection";
import WhyChooseMavyn from "@/components/WhyChooseMavyn";
import StatsRow from "@/components/StatsRow";
import WhyClientsCarousel from "@/components/WhyClientsCarousel";
import Testimonials from "@/components/Testimonials";
import ClientQuote from "@/components/ClientQuote";
import CTASection from "@/components/CTASection";
import { IMG } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustChipsMarquee />
      <AboutPreview />
      <AssistSection />
      <WhyChooseMavyn />
      <StatsRow />
      <WhyClientsCarousel />
      <ClientQuote />
      <Testimonials />
      <CTASection
        label="Talk to Us"
        title="Let's discuss your next compliance step."
        paragraph="A CBUAE inspection looming. A DNFBP file to clean up. A free-zone entity to register. Send a few lines — we'll come back the same week."
        cta="Contact Us"
        image={IMG.contactAerial}
      />
    </>
  );
}
