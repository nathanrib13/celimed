import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageView } from "@/components/SolutionPageView";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("outras-solucoes");

export const metadata: Metadata = {
  title: "Outras Soluções em Saúde",
  description: solution?.lead,
};

export default function Page() {
  if (!solution) notFound();
  return <SolutionPageView solution={solution} />;
}
