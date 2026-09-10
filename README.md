# CELIMED — site institucional

Site institucional da CELIMED. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4.
Tipografia: Space Grotesk (títulos) e Inter (texto).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

Deploy recomendado: Vercel (sem configuração adicional).

## Estrutura

```
app/
  layout.tsx                 header + footer + fontes + metadata global
  page.tsx                   Home
  a-celimed/                  A CELIMED (quem somos, atuação, conformidade, encerramento)
  solucoes/
    page.tsx                 índice das áreas
    endoscopia-colonoscopia/
    ultrassom/
    estetica-medica/
    outras-solucoes/
  setor-publico/
  setor-privado/
  tecnologia-desenvolvimento/
  contato/
  sitemap.ts / robots.ts / icon.svg / not-found.tsx
components/                   Header, Footer, Logo (SVG), Reveal, PulseLine, formulário, etc.
lib/
  site.ts                    dados de contato e menu
  solutions.ts               conteúdo das 4 áreas + tipos do catálogo futuro
```

## O que ajustar antes de publicar

1. `lib/site.ts`
   - `whatsapp` e `whatsappLabel`: número comercial real (formato internacional, ex.: 5511999999999).
   - `email`: e-mail comercial real.
   - `url`: domínio final.
2. Textos das áreas: `lib/solutions.ts`.
3. Imagens: hoje o site usa composições gráficas (linha de ECG, arcos, grades). Os pontos de
   troca por foto estão marcados com o comentário `IMAGE SLOT` (ex.: `components/SolutionPageView.tsx`).
   Prioridade de imagem: 1) Endoscopia/Colonoscopia, 2) Ultrassom, 3) Estética Médica.

## Contato

Sem backend e sem formulário. A página `/contato` e o bloco `ContactDirect` mostram o
número do WhatsApp e o e-mail comercial, com botão que abre a conversa no WhatsApp.
Ajuste os dados em `lib/site.ts`.

## Catálogo futuro (Área → Categoria → Produto)

`lib/solutions.ts` já traz os tipos `Category` e `Product`. Para publicar produtos:

1. Preencher `categories` em cada `Solution`.
2. Criar as rotas `app/solucoes/[area]/[categoria]/[produto]/page.tsx` reaproveitando os dados.

A navegação e o posicionamento institucional não precisam ser alterados para isso.

## Marca

A marca é reconstruída em SVG em `components/Logo.tsx` (anel "C" em degradê verde/azul,
cruz médica e linha de ECG), sem os textos de assinatura do arquivo original.
Paleta em `app/globals.css` (`@theme`): verde `#1EB673`, teal `#12A3AB`, azul `#1F52D9`,
grafite `#0B1120`, fundo escuro `#070B14`.
