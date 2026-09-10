import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPageView } from "@/components/SolutionPageView";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("estetica-medica");

export const metadata: Metadata = {
  title: "Tecnologia para Estética Médica",
  description: solution?.lead,
};

export default function Page() {
  if (!solution) notFound();
  return <SolutionPageView solution={solution} />;
}
