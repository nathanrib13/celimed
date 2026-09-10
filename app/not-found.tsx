import { PrimaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="u-container flex min-h-[70vh] flex-col items-start justify-center py-40">
      <span className="font-display text-[clamp(3rem,10vw,7rem)] font-light text-line-strong">404</span>
      <h1 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] text-ink">Página não encontrada</h1>
      <p className="mt-4 max-w-md text-slate">
        O endereço acessado não existe ou foi movido. Volte para o início e continue a navegação.
      </p>
      <div className="mt-8">
        <PrimaryButton href="/">Voltar ao início</PrimaryButton>
      </div>
    </section>
  );
}
