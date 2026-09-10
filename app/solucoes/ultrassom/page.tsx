import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageView } from "@/components/SolutionPageView";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("ultrassom");

export const metadata: Metadata = {
  title: "Ultrassom e Diagnóstico por Imagem",
  description: solution?.lead,
};

export default function Page() {
  if (!solution) notFound();
  return <SolutionPageView solution={solution} />;
}
