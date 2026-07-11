import type { CaseStudy } from "@/data/case-studies";
import OptionD from "@/components/layouts/OptionD";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyLayout({ caseStudy }: Props) {
  return <OptionD caseStudy={caseStudy} />;
}
