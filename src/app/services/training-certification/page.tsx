import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Training & Certification" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Training & Certification"
      subtitle="FATF-style assessor prep, AML/CFT and sanctions training, board briefings and tailored learning paths for compliance, audit and front-line teams."
      description={[
        "We deliver training programmes that build genuine capability — not tick-box exercises that satisfy a policy but leave staff unprepared for real scenarios.",
        "Our curriculum covers AML/CFT fundamentals, sanctions awareness, FATF-style assessor preparation, and board-level briefings tailored to your firm's risk profile.",
        "We design learning paths for compliance officers, internal auditors, and front-line staff — with assessments that prove competence and satisfy regulatory training requirements."
      ]}
      image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
