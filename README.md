# Carro Sem Surpresa

Site de carro — ferramentas para o motorista brasileiro nunca mais ser
pego de surpresa pelos custos escondidos de comprar, manter ou vender um
carro. Domínio: `carrosemsurpresa.com.br`.

Stack: Next.js (App Router), React, TypeScript, Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
```

Validação: `npm run lint`, `npm test` (Node 22.18+ ou 24) e, após o build,
`node scripts/check-export.mjs`. Pull requests executam essas verificações.

O diretório `out/` é o site pronto para publicar. Um push na `main` aciona
o workflow existente que atualiza `hostinger-deploy`; confirme no hPanel
se a integração usa essa branch. O código-fonte não deve substituir o
conteúdo estático na hospedagem.

Os espaços publicitários vazios ficam ocultos por padrão. Para revisar
placeholders, defina `NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS=true` antes do build.
Isso não ativa anúncios reais nem configura consentimento.

As listas de ferramentas e guias ficam em `lib/tools.ts` e `lib/guides.ts`.
Os novos guias com fontes estão em `lib/new-guides.ts`. A pesquisa e os
limites da auditoria estão em `docs/redesign-e-conteudo.md`.

O projeto está configurado com `output: "export"` em `next.config.ts`
(export estático — `next build` gera a pasta `out/`), pensado para rodar
em hospedagem compartilhada sem suporte a Node.js. Se a hospedagem final
confirmar suporte a Node.js (SSR/ISR), remova essa opção em
`next.config.ts`.

## Estrutura

- `app/` — rotas (uma por ferramenta/página, sem SPA com abas)
- `components/` — componentes de UI reutilizáveis
- `lib/config.ts` — valores padrão ajustáveis das calculadoras (preço de
  combustível, % de seguro, etc.)
- `lib/calculators/` — lógica pura de cada calculadora
- `lib/data/` — datasets (ex: `ipva-por-estado.json`)

## Ferramentas planejadas

- `/calculadora-custo-de-posse`
- `/manutencao-preventiva-vs-corretiva`
- `/gerador-recibo-veiculo`
- `/tabela-ipva-por-estado`
- `/guias` — conteúdo evergreen
