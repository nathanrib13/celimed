import { Reveal } from "./Reveal";
import { PulseLine } from "./PulseLine";
import { WhatsAppIcon, WeChatIcon } from "./SocialIcons";
import { site, whatsappLink } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Bloco de contato direto, no estilo do card de destaque da Home:
 * fundo escuro, acento da marca, WhatsApp e e-mail. Sem formulário.
 */
export function ContactDirect() {
  return (
    <section id="contato" className="u-container u-section scroll-mt-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-night p-8 text-paper md:p-14">
          <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="glow-orb right-[-8%] top-[-24%] h-72 w-72 bg-brand-green/30" aria-hidden="true" />
          <div className="glow-orb bottom-[-30%] left-[6%] h-72 w-72 bg-brand-blue/40" aria-hidden="true" />

          <div className="relative">
            <span className="eyebrow on-dark">Contato</span>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.8rem,3.6vw,2.7rem)] leading-tight text-paper">
              Fale com a CELIMED
            </h2>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-mist">
              Atendimento comercial direto pelo WhatsApp. Conte a necessidade e a área de interesse.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper">
                    <WhatsAppIcon />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    WhatsApp
                  </p>
                </div>
                <p className="mt-3 font-display text-2xl tracking-[-0.02em] text-paper">
                  {site.whatsappLabel}
                </p>
                <a
                  href={whatsappLink("Olá! Gostaria de falar com a CELIMED.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-cta mt-4 inline-flex rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper/90"
                >
                  Abrir WhatsApp
                  <ArrowIcon />
                </a>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper">
                    <WeChatIcon />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                    WeChat
                  </p>
                </div>
                <p className="mt-3 font-display text-2xl tracking-[-0.02em] text-paper">
                  {site.wechatId}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-white/45">
                  Adicione pelo ID acima diretamente no aplicativo WeChat.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  E-mail
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block font-display text-xl tracking-[-0.01em] text-paper transition-colors hover:text-brand-green"
                >
                  {site.email}
                </a>
                <p className="mt-4 text-xs leading-relaxed text-white/45">
                  Parcerias comerciais e fabricantes: indique o assunto na mensagem para
                  direcionarmos à equipe responsável.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <PulseLine mode="loop" className="opacity-50" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
