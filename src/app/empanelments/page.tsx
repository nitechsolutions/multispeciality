import CashlessCTA from "@/components/empanelment/CashlessCTA";
import EmpanelmentGrid from "@/components/empanelment/EmpanelmentGrid";
import EmpanelmentHero from "@/components/empanelment/EmpanelmentHero";
import EmpanelmentInfo from "@/components/empanelment/EmpanelmentInfo";

export default function Empanelment() {
  return (
    <div>
      <EmpanelmentHero />
      <EmpanelmentGrid />
      <EmpanelmentInfo />
      <CashlessCTA />
    </div>
  );
}
