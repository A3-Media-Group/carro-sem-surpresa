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
