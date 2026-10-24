import DepartmentGrid from "@/components/department/DepartmentGrid";
import DepartmentHero from "@/components/department/DepartmentHero";
import HelpSection from "@/components/department/HelpSection";

export default function Departments() {
  return (
    <div>
      <DepartmentHero />
      <DepartmentGrid />
      <HelpSection />
    </div>
  );
}
