import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageView } from "@/components/SolutionPageView";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("endoscopia-colonoscopia");

export const metadata: Metadata = {
  title: "Endoscopia & Colonoscopia",
  description: solution?.lead,
};

export default function Page() {
  if (!solution) notFound();
  return <SolutionPageView solution={solution} />;
}
