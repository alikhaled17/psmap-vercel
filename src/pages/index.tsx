import AboutComponent from "@/app/components/about/about.component";
import ContactComponent from "@/app/components/contact/contact.component";
import DialogueComponent from "@/app/components/dialogue/dialogue.component";
import FindComponent from "@/app/components/find/find.component";
import FooterComponent from "@/app/components/footer/footer.component";
import GoalsComponent from "@/app/components/goals/goals.component";
import HeroComponent from "@/app/components/hero/hero.component";
import NavComponent from "@/app/components/nav/nav.component";
import ParticipateComponent from "@/app/components/participate/participate.component";
import PlansComponent from "@/app/components/plans/plans.component";
import ReportComponent from "@/app/components/report/report.component";
import UseCasesComponent from "@/app/components/useCases/useCases.component";

export default function Home() {
  return (
    <>
      <NavComponent />
      <HeroComponent />
      <FindComponent />
      <UseCasesComponent />
      <DialogueComponent />
      <GoalsComponent />
      <ReportComponent />
      <PlansComponent />
      <AboutComponent />
      <ParticipateComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
