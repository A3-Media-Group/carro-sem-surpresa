# Carro Sem Surpresa — design, conteúdo e validação

## Entrega

- Identidade em grafite, âmbar e fundo claro; títulos em Manrope e texto em Inter, servidos pelo build do Next.js.
- Home organizada por intenção: comprar, economizar e cuidar do veículo. Mantida a prévia interativa do custo de posse.
- 14 ferramentas: as 12 existentes e duas novas, custo de viagem e checklist interativo de compra de usado.
- 17 guias: os 13 endereços existentes preservados e quatro novos guias com referências e sumário.
- Busca e filtros no diretório de ferramentas; busca nos guias, tolerante a acentos e maiúsculas, com recuperação de resultados vazios.
- Canonical próprio, metadados sociais e imagem de compartilhamento; autoria institucional e dados Article nos guias. Datas novas somente nos quatro artigos novos.
- Página sobre critérios editoriais; anúncios vazios ocultos por padrão, com opção de prévia. Nenhuma conta AdSense foi configurada.
- Acessibilidade: atalho ao conteúdo, foco visível, menu mobile com Escape, resultados anunciados e opção de movimento reduzido.

## Pesquisa de oportunidades

A seleção é qualitativa: análise das lacunas do site, resultados públicos de busca e perguntas de usuários. Não representa ranking de volume, estimativa de tráfego ou dados privados do Search Console. Não houve acesso ao Planejador de Palavras-chave nem aos relatórios de audiência do domínio.

| Intenção observada | Evidência e referência | Implementação |
|---|---|---|
| Quanto combustível comprar e quanto custa uma viagem? | [Pergunta pública sobre abastecimento para viagem](https://www.reddit.com/r/carros/comments/1otdqnk); [ANP: pesquisa de preços](https://www.gov.br/anp/pt-br/assuntos/precos-e-defesa-da-concorrencia/precos/precos-revenda-e-de-distribuicao-combustiveis) | Calculadora de viagem com total, ida/volta e rateio; guia com exemplo |
| Etanol ou gasolina compensa no meu carro? | [Discussão pública sobre gasolina e etanol](https://www.reddit.com/r/carros/comments/1spztgv/gasolina_ou_etanol/); [Inmetro: PBE Veicular](https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica/veiculos-automotivos-pbe-veicular) | Guia de consumo real e ligação ao comparador existente; correção de entradas inválidas |
| O que conferir antes de comprar um usado? | [Cobertura recente do tema](https://www.cnnbrasil.com.br/auto/checklist-do-carro-usado-saiba-o-que-avaliar-antes-de-fechar-negocio/); [Senatran: recall](https://www.gov.br/pt-br/servicos/realizar-consulta-sobre-recall-de-veiculos) e [restrições](https://www.gov.br/pt-br/servicos/consultar-informacoes-sobre-restricoes-e-indicadores-de-veiculos) | Checklist de 16 verificações e guia de consultas oficiais |
| Como comparar propostas de financiamento? | [Dúvida pública sobre CET](https://www.reddit.com/r/brasil/comments/1momay2); [Banco Central: comparação de juros e CET](https://bcb.gov.br/detalhenoticia/232/noticia) | Guia distinguindo parcela, prazo, juros, CET e custo de uso |

As discussões serviram para identificar dúvidas; não foram usadas como autoridade mecânica, tributária ou financeira. O conteúdo novo foi escrito com exemplos originais e referências institucionais.

## Correções materiais

1. Comparador de combustível não recomenda mais uma opção com custo zero quando o consumo é apagado ou inválido.
2. Licenciamento: título introdutório e descrição distinguem atraso de pagamento da circulação sem licenciamento válido; medida administrativa corrigida para remoção. Referência: [CTB](https://www.presidencia.gov.br/ccivil_03/leis/l9503compilado.htm).
3. IPVA atrasado: retiradas generalizações nacionais de multa diária, teto e prazo de negativação, pois dependem do estado.
4. IPVA antigo: removida a afirmação de que a imunidade nacional substituiu benefícios estaduais mais favoráveis. Tabela passa a identificar a coluna como referência nacional; FAQ corrigido. Referência: [esclarecimento do Senado](https://www12.senado.leg.br/radio/1/noticia/2025/12/09/isencao-do-ipva-para-carros-antigos-sera-promulgada-nesta-terca-feira).
5. A home deixa de afirmar que todo acesso é exclusivamente local: consultas como a FIPE dependem de provedor externo. A prévia de posse identifica suas premissas como exemplo, sem alegar consumo médio nacional comprovado.

## Validação realizada

- Instalação pelo lockfile; npm audit da instalação sem vulnerabilidades reportadas naquele momento.
- ESLint e build de produção com TypeScript aprovados.
- Oito testes automatizados: valores publicados, ida/volta, despesas, rateio, limites, combustível inválido e empate.
- Exportação: 38 páginas com H1 único e canonical correto; JSON-LD analisável; 1.125 referências internas conferidas, sem arquivos ausentes; 38 URLs do sitemap existentes.
- Navegador: home desktop e mobile a 390 px; menu e Escape; resultados de viagem (R$ 190 / R$ 95 por pessoa, R$ 340 / R$ 170 na volta); consumo zero bloqueia resultado; checklist marca e limpa; busca encontra viagem e recupera estado sem resultados; guia com sumário e sem transbordamento horizontal no mobile inspecionado.

## Limites e continuidade

Não foram acessados Search Console, Analytics, AdSense ou hPanel, nem medidos Core Web Vitals reais. A inspeção editorial corrigiu problemas identificados, mas não certifica cada afirmação de todos os artigos legados nem todas as alíquotas dos 27 estados. Os indicadores de estimativa da base de IPVA continuam importantes; eles não foram convertidos em dados confirmados. Valores de manutenção e diagnóstico também continuam referências a conferir para o veículo específico.

A função de impressão abre a interface do navegador; não foi enviado trabalho à impressora. Nenhum dado pessoal foi submetido. A disponibilidade da API externa de FIPE depende do provedor, que não é controlado pelo projeto.

Após publicar, usar consultas e impressões do Search Console para escolher os próximos temas e acompanhar desempenho mobile. Confirmar fontes estaduais da tabela de IPVA antes de chamar o conjunto de dados de totalmente verificado. Para monetizar, configurar os scripts reais, ads.txt aplicável e consentimento antes de habilitar anúncios; a simples presença de espaços não equivale à aprovação.

## Publicação

As alterações são entregues em branch e pull request. O workflow existente de push na main continua gerando `out/` na branch `hostinger-deploy`. A conexão dessa branch à hospedagem deve estar configurada no hPanel. A nova validação de PR não publica o site.
