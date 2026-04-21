import type { BlogPost } from "./blogTypes";
import { BLOG_COVERS } from "./blogCovers";

const blogPostsRaw: Omit<BlogPost, "coverImage">[] = [
  {
    slug: "governanca-de-dados-por-onde-comecar",
    title: "Governança de dados: por onde começar sem travar o BI",
    excerpt:
      "Governança não é burocracia pelo prazer de burocracia: é o mínimo necessário para que dashboards e relatórios ganhem confiança e escala. Neste artigo desdobramos por onde começar, como priorizar qualidade sem travar entregas e como conectar decisões de negócio ao uso de ferramentas Microsoft no dia a dia.",
    category: "Governança",
    date: "2026-03-12",
    readMinutes: 20,
    featured: true,
    content: [
      {
        type: "p",
        text: "Em muitas organizações, “governança de dados” ainda é lida como sinônimo de comitês intermináveis, formulários e atraso na entrega. Na prática, quando BI e analytics começam a crescer, a ausência de governança vira um problema ainda pior: números divergentes entre áreas, definições ambíguas de métricas e um clima de desconfiança nas reuniões. O desafio é começar com o nível certo de rigor — suficiente para dar consistência, sem sufocar a experimentação que faz o projeto andar.",
      },
      {
        type: "p",
        text: "Em projetos de consultoria, costumamos ouvir frases como “precisamos de governança” depois que já existem dezenas de relatórios em produção. Nesse momento, o trabalho não é desmontar o que funciona, mas sim criar uma camada explícita de acordo: o que pode ser “oficial” versus o que ainda é experimental, como pedir uma nova métrica e quanto tempo leva para ela ser homologada. Quando essas regras ficam implícitas, cada gestor interpreta os números à sua maneira — e a empresa paga o preço em retrabalho e discussões infinitas em comitês.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop",
        alt: "Ambiente de trabalho com análise de dados em tela",
        caption: "Boas práticas de governança combinam processo claro e ferramentas que suportam auditoria e colaboração.",
      },
      {
        type: "p",
        text: "Outro ponto frequentemente negligenciado é a comunicação: quando uma regra de cálculo muda — por exemplo, exclusão de determinado canal de venda do faturamento — o BI precisa refletir isso em data conhecida, com nota de release acessível ao usuário de negócio. Sem esse hábito, o time técnico vira “culpado” por divergências que, na verdade, são desalinhamento de expectativa. Documentar mudanças é tão importante quanto entregar o relatório novo.",
      },
      {
        type: "h2",
        text: "O que é “mínimo viável” de governança em BI",
      },
      {
        type: "p",
        text: "Antes de falar de ferramentas, convém alinhar três pilares que qualquer time de dados deveria conseguir responder de forma explícita: (1) quem é dono de cada conjunto de dados ou métrica; (2) onde está a definição oficial (“o que é faturamento líquido neste relatório?”); (3) como as mudanças são comunicadas quando a regra de negócio muda. Sem isso, cada nova sprint de desenvolvimento tende a refazer o mesmo debate em círculos.",
      },
      {
        type: "p",
        text: "Um catálogo de dados — mesmo que inicialmente em planilha compartilhada ou wiki — já é um avanço enorme quando há disciplina de atualização. Em ambientes Microsoft, é comum evoluir para soluções como Microsoft Purview ou o catálogo integrado ao ecossistema de lakehouse/fabric, mas o processo humano de curadoria continua sendo o gargalo: tecnologia acelera, não substitui acordo entre negócio e TI.",
      },
      {
        type: "h2",
        text: "Qualidade e linhagem: o que priorizar primeiro",
      },
      {
        type: "p",
        text: "Nem toda empresa precisa de rastreabilidade ponta a ponta no primeiro mês. Em um primeiro momento, vale concentrar esforço nas métricas que alimentam decisões críticas — financeiro, estoque, receita recorrente, churn, o que for estratégico no seu contexto. Para cada uma, documente fonte, transformações principais e responsáveis. Isso cria o hábito de linhagem sem exigir um desenho enterprise completo de cedo.",
      },
      {
        type: "p",
        text: "Na prática, isso pode significar aceitar que alguns indicadores “secundários” ainda vivam em planilhas por um tempo — desde que fique claro que não entram no pacote oficial de fechamento. Tentar governar tudo de uma vez costuma paralisar o time e gerar resistência. Melhor entregar governança forte para o núcleo crítico e um roteiro de expansão trimestral para os demais domínios.",
      },
      {
        type: "ul",
        items: [
          "Defina “fonte da verdade” para KPIs que aparecem em mais de um painel.",
          "Padronize nomenclatura de tabelas e campos expostos ao usuário final de BI.",
          "Estabeleça um fluxo simples de homologação quando um indicador novo for para produção.",
        ],
      },
      {
        type: "h2",
        text: "Como isso se conecta ao Power BI, Fabric ou Azure",
      },
      {
        type: "p",
        text: "As ferramentas oferecem workspaces, permissões por capacidade, políticas de certificação de conjuntos de dados e integração com identidade corporativa (Entra ID). Ou seja: a tecnologia já traz os ganhos de segurança e segregação; o que falta, muitas vezes, é política de uso — quem pode publicar onde, quando um dataset é promovido a “certificado” e qual o processo de revisão. Governança é metade processo, metade habilitação técnica.",
      },
      {
        type: "blockquote",
        text: "Comece pequeno, documente o que dói hoje e evolua a formalidade na medida em que o consumo de dados se amplia.",
      },
      {
        type: "h2",
        text: "Próximos passos práticos",
      },
      {
        type: "p",
        text: "Se você está implantando ou revisando BI, reserve um workshop com negócio e TI para listar os dez indicadores mais usados e os conflitos já conhecidos. A partir dali, desenhe um único dicionário de métricas e um cronograma de saneamento. Em poucas iterações, a percepção de confiança nos números muda — e a governança deixa de ser “projeto paralelo” para virar parte do jeito de trabalhar.",
      },
      {
        type: "p",
        text: "Por fim, estabeleça uma cadência de revisão: trimestralmente, pergunte se as definições ainda refletem o negócio, se novos sistemas entraram no escopo e se os responsáveis continuam corretos. Governança viva é menos documento estático e mais ritual de alinhamento — algo próximo do que empresas de consultoria em dados pregam quando falam em “Data & IA para decisões estratégicas”: tecnologia a serviço de clareza, não de complexidade extra.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80&auto=format&fit=crop",
        alt: "Equipe colaborando em frente a telas com gráficos",
        caption: "Governança sustentável envolve negócio, TI e analytics falando a mesma língua sobre métricas e prazos.",
      },
    ],
  },
  {
    slug: "microsoft-fabric-arquitetura-analytics",
    title: "Microsoft Fabric: o que muda na arquitetura de analytics",
    excerpt:
      "Fabric unifica experiências que antes exigiam vários serviços no Azure. Aqui você vê o impacto em lakehouse, engenharia de dados, custos de capacidade e consumo em Power BI — e o que planejar antes de migrar fluxos legados.",
    category: "Plataforma & Nuvem",
    date: "2026-02-28",
    readMinutes: 17,
    content: [
      {
        type: "p",
        text: "O Microsoft Fabric é apresentado como uma plataforma unificada de analytics: em uma mesma experiência, equipes podem trabalhar com ingestão, transformação, armazenamento em formato lakehouse, warehousing e consumo analítico — com Power BI como camada de visualização familiar para muitas empresas. Para quem vem de um cenário com vários serviços “solados” no Azure, a mudança é tanto técnica quanto organizacional: menos fricção entre times, mas mais necessidade de alinhamento em padrões de dados e custos.",
      },
      {
        type: "p",
        text: "Do ponto de vista de arquitetura, deixa de ser tão simples perguntar “onde está o banco?”: o desenho passa a envolver capacidades compartilhadas, políticas de acesso ao lake e decisões sobre o que permanece em modelo relacional clássico versus o que vive em tabelas Delta consumidas por SQL e Spark. Times que já trabalhavam com Synapse ou ADF tendem a se adaptar mais rápido, mas ainda assim precisam redesenhar convenções de nomenclatura e promotão entre ambientes — senão a promessa de unificação vira apenas um novo silo com interface bonita.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&q=80&auto=format&fit=crop",
        alt: "Representação abstrata de rede e dados",
        caption: "Plataformas unificadas pedem padrão de camadas e responsabilidades claras entre engenharia, analytics e negócio.",
      },
      {
        type: "h2",
        text: "Lakehouse e OneLake como base",
      },
      {
        type: "p",
        text: "A ideia central é armazenar dados em formato aberto (Delta Lake sobre armazenamento compatível com Parquet) e permitir que engenharia de dados, SQL e cargas de BI compartilhem a mesma base lógica, reduzindo cópias desnecessárias e ETLs redundantes. Na prática, isso exige disciplina de modelagem de camadas — bronze, prata e ouro, ou equivalente — para que o consumo self-service não vire caos de datasets duplicados.",
      },
      {
        type: "h2",
        text: "Impacto no time de BI e engenharia",
      },
      {
        type: "p",
        text: "Perfis que antes trabalhavam principalmente em pipelines de Azure Data Factory ou em SSIS on-premises passam a conviver com notebooks, Spark e orquestração integrada ao ecossistema. Já analistas e desenvolvedores Power BI encontram caminhos mais curtos para conectar-se a dados preparados no lakehouse, com governança e linhagem mais visíveis quando bem configuradas.",
      },
      {
        type: "ul",
        items: [
          "Padronize convenções de nomes de workspaces e itens publicados.",
          "Defina políticas de capacidade (F SKU) e quem pode publicar em cada ambiente.",
          "Crie um processo claro de promoção entre desenvolvimento, homologação e produção.",
        ],
      },
      {
        type: "h2",
        text: "Migração e realidade híbrida",
      },
      {
        type: "p",
        text: "Raramente tudo migra de uma vez. É comum manter SQL Server ou integrações legadas por um tempo, com sincronização seletiva para a nuvem. A boa notícia é que o ecossistema Microsoft facilita integração; a má notícia é que custo e complexidade precisam ser gerenciados — não basta “ligar o Fabric”, é preciso planejar o que será desligado no legado para evitar pagar duas vezes pelo mesmo fluxo.",
      },
      {
        type: "p",
        text: "Em resumo: Fabric não é apenas “mais um serviço”, é um convite a repensar fronteiras entre engenharia de dados, analytics avançado e BI corporativo. Quanto mais cedo os patrocinadores do projeto alinharem expectativas de custo, segurança e ritmo de entrega, menores serão os atritos na adoção — especialmente em empresas que já investiram anos em modelos dimensionais on-premises e agora buscam o mesmo rigor na nuvem.",
      },
    ],
  },
  {
    slug: "ia-generativa-analitica-limites-boas-praticas",
    title: "IA generativa no trabalho analítico: limites e boas práticas",
    excerpt:
      "Copilot e modelos de linguagem podem acelerar documentação, consultas e storytelling — mas não eliminam validação humana, nem a responsabilidade sobre qualidade e privacidade dos dados. Veja onde usar com segurança e como evitar armadilhas comuns em projetos de BI.",
    category: "Inteligência Artificial",
    date: "2026-03-02",
    readMinutes: 16,
    content: [
      {
        type: "p",
        text: "A promessa de pedir em linguagem natural um “resumo das vendas por região” e receber gráficos prontos é sedutora. Ferramentas incorporadas ao Microsoft 365, Power BI e Azure OpenAI aproximam essa realidade — mas analistas experientes sabem que o gargalo nunca foi só escrever SQL: é entender contexto, qualidade da base, sazonalidade e definições de negócio. IA generativa muda a velocidade de exploração, não a necessidade de pensamento crítico.",
      },
      {
        type: "p",
        text: "Em consultorias de Data & IA, costumamos separar três camadas: exploração assistida (rápida, pode errar), produção assistida (com revisão humana obrigatória) e decisão automatizada (só quando há testes e monitoramento). Muitas equipes pulam do primeiro para o terceiro — e aí aparecem relatórios com filtros absurdos ou números que “parecem certos” mas usam join errado. A boa notícia é que políticas claras de uso, combinadas com camadas semânticas bem modeladas, reduzem drasticamente esse risco.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7486?w=1400&q=80&auto=format&fit=crop",
        alt: "Conceito de inteligência artificial e dados",
        caption: "Modelos de linguagem amplificam produtividade, mas precisam de contexto de negócio e dados confiáveis por trás.",
      },
      {
        type: "h2",
        text: "Onde a IA ajuda de verdade",
      },
      {
        type: "ul",
        items: [
          "Geração de rascunhos de documentação de datasets e métricas.",
          "Sugestão de consultas e DAX a partir de descrições (sempre revisadas).",
          "Assistentes para explicar visualizações em linguagem acessível a gestores.",
        ],
      },
      {
        type: "h2",
        text: "Riscos e limites",
      },
      {
        type: "p",
        text: "Modelos podem alucinar detalhes ou interpretar mal filtros se o esquema de dados for ambíguo. Dados sensíveis exigem políticas de uso — anonimização, mascaramento e controle de acesso — antes de qualquer integração com serviços de linguagem em nuvem. Além disso, compliance (LGPD, setores regulados) exige saber onde os prompts e logs vão parar.",
      },
      {
        type: "blockquote",
        text: "Trate a IA como um copiloto: acelera o trabalho mecânico, mas quem assina o relatório continua sendo a equipe de negócio e dados.",
      },
      {
        type: "h2",
        text: "Boas práticas em equipes de BI",
      },
      {
        type: "p",
        text: "Combine uso de assistentes com revisão por pares, mantenha glossário de métricas atualizado e estabeleça que outputs de IA não vão para produção sem validação em ambiente controlado. Quanto mais clara for a camada semântica (por exemplo, modelos tabulares bem documentados), melhores serão as respostas assistidas — a IA não cria qualidade onde o modelo não existe.",
      },
      {
        type: "p",
        text: "Por último, envolva jurídico e segurança da informação cedo: uso de dados pessoais em prompts, retenção de logs e limites de fine-tuning são temas que não podem ser “detalhe técnico”. Quem trabalha com Power BI e Azure já está acostumado a pensar em RLS e workspaces — estenda esse cuidado para qualquer fluxo em que texto ou dados saiam do perímetro controlado.",
      },
    ],
  },
  {
    slug: "lakehouse-vs-data-warehouse",
    title: "Lakehouse vs. data warehouse tradicional: como escolher",
    excerpt:
      "Não é disputa de moda: são arquiteturas com trade-offs distintos entre flexibilidade, custo de ingestão, performance SQL e maturidade do time. Entenda quando cada abordagem faz sentido — e por que o híbrido é a regra, não a exceção.",
    category: "Dados & Arquitetura",
    date: "2026-02-14",
    readMinutes: 14,
    content: [
      {
        type: "p",
        text: "O termo lakehouse descreve em grande parte a combinação de armazenamento em formato aberto em data lake com camadas de transação e SQL que se aproximam da experiência de um warehouse. Já o data warehouse tradicional (frequentemente construído sobre banco relacional columnar ou MPP) continua excelente para cargas analíticas com esquema bem definido e forte governança.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80&auto=format&fit=crop",
        alt: "Servidor e infraestrutura de dados",
        caption: "A escolha entre lakehouse e warehouse envolve volume, variedade de fontes e perfil de consumo analítico.",
      },
      {
        type: "p",
        text: "Em projetos de médio porte, a discussão costuma esquentar quando alguém cita “modernização” como sinônimo de substituir tudo o que é relacional por camadas apenas em data lake. Isso ignora que muitos relatórios financeiros e regulatórios ainda se beneficiam de modelagem dimensional explícita, com histórico de snapshots e auditoria que já foi batizada em anos de uso. Descartar esse ativo sem mapear dependências é receita para atraso de fechamento e retrabalho de FP&A.",
      },
      {
        type: "h2",
        text: "Quando o warehouse clássico ainda brilha",
      },
      {
        type: "p",
        text: "Se o domínio de negócio é estável, os KPIs são bem definidos e o volume cabe confortavelmente no motor escolhido, um warehouse pode ser mais simples de operar e custar menos cognitivamente para o time. Ferramentas como SQL Server, Synapse dedicated pools ou outras soluções MPP seguem muito fortes em cenários corporativos com décadas de modelagem dimensional.",
      },
      {
        type: "h2",
        text: "Quando o lakehouse entra em cena",
      },
      {
        type: "p",
        text: "Quando há muitas fontes semiestruturadas, necessidade de data science sobre dados brutos, ou evolução rápida de esquema, o lakehouse reduz atrito: você armazena uma vez em formato aberto e permite diferentes motores (Spark, SQL serverless, etc.) consumirem as mesmas tabelas Delta. O custo é exigir mais maturidade em engenharia de dados e observabilidade de pipelines.",
      },
      {
        type: "h3",
        text: "Híbrido é a norma",
      },
      {
        type: "p",
        text: "Na vida real, muitas organizações mantêm um núcleo relacional para relatórios financeiros oficiais e um lakehouse para inovação, experimentos e cargas de grande volume. O importante é não duplicar sem critério: definir quem é o sistema de registro para cada domínio e como o fluxo chega ao consumo em BI.",
      },
      {
        type: "p",
        text: "Um exercício útil é desenhar, mesmo que em quadro branco, o fluxo de dados críticos: da origem operacional até o painel executivo. Onde aparecem gargalos de qualidade hoje? Onde o time de ciência de dados pede mais liberdade? As respostas costumam mostrar que lakehouse e warehouse podem coexistir por anos — cada um com SLA e donos distintos, mas com visão única no catálogo de dados.",
      },
    ],
  },
  {
    slug: "qualidade-de-dados-metricas-que-importam",
    title: "Qualidade de dados: métricas que o negócio realmente sente",
    excerpt:
      "Completude e precisão são só o começo. Neste texto mostramos como ligar qualidade a impacto financeiro e operacional, como priorizar regras e como comunicar resultados para quem não fala “técnique”.",
    category: "Governança",
    date: "2026-01-30",
    readMinutes: 13,
    content: [
      {
        type: "p",
        text: "Programas de qualidade de dados falham quando ficam em indicadores técnicos desconectados da realidade das áreas. “99% de completude na coluna X” não impressiona ninguém na mesa de negócio se ainda assim pedidos atrasam porque a regra de negócio está errada. O segredo é escolher métricas que traduzam em atraso, retrabalho, multa regulatória ou perda de receita.",
      },
      {
        type: "p",
        text: "Na prática de consultoria, começamos por entrevistar donos de processo: o que acontece quando um CNPJ está duplicado? Quando um pedido chega sem data prometida? Essas histórias viram casos de uso priorizados — e só então desdobramos regras de validação em pipelines. Sem esse vínculo, o time de dados mede esforço em “número de regras criadas”, enquanto o negócio continua sentindo falta de confiança na base.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80&auto=format&fit=crop",
        alt: "Reunião de negócios analisando indicadores",
        caption: "Qualidade de dados ganha força quando métricas conversam com dor operacional e financeira mensurável.",
      },
      {
        type: "h2",
        text: "Dimensões clássicas — com olhar de negócio",
      },
      {
        type: "ul",
        items: [
          "Precisão: o valor reflete a realidade (ex.: CNPJ válido, preço alinhado ao ERP).",
          "Completude: campos obrigatórios para o processo estão preenchidos.",
          "Consistência: o mesmo conceito não diverge entre sistemas sem explicação.",
          "Atualidade: o dado chega a tempo para a decisão — não basta estar certo se chega tarde.",
        ],
      },
      {
        type: "h2",
        text: "Operacionalizando a qualidade",
      },
      {
        type: "p",
        text: "Regras devem ser testáveis e automatizáveis onde possível — pipelines que falham, alertas em filas de exceção, dashboards de “saúde” da carga diária. Em stacks Microsoft, isso pode combinar Data Factory/Synapse/Fabric para orquestração, SQL para validações e Power BI para monitoramento visual dos SLAs acordados com o negócio.",
      },
      {
        type: "p",
        text: "Por fim, amarre qualidade a donos: cada domínio (clientes, produtos, financeiro) precisa de um responsável que aceite o SLA e priorize correções. Sem ownership, o melhor catálogo de regras vira papel.",
      },
      {
        type: "p",
        text: "Uma dica final: publique um painel simples de “saúde da carga” acessível ao negócio — não só ao time técnico. Mostrar em tempo quase real o que atrasou, o que foi corrigido e o que está na fila cria transparência e reduz a percepção de que qualidade de dados é “problema de TI”.",
      },
    ],
  },
  {
    slug: "dataops-devops-pipelines-analiticos",
    title: "DataOps e DevOps: levando pipelines analíticos ao mesmo rigor do software",
    excerpt:
      "Versionamento, revisão e deploy automatizado não são luxo: são o que permite escalar dados sem medo de quebrar produção. Veja o que colocar no Git, como estruturar pipelines no Azure DevOps e como envolver analistas no processo.",
    category: "Engenharia de Dados",
    date: "2026-02-05",
    readMinutes: 15,
    content: [
      {
        type: "p",
        text: "Times de software já entenderam há tempo que entregar rápido sem integração contínua é receita para incidente. Em dados, a cultura demorou mais — muitos pipelines ainda são alterados “na mão” no servidor, com pouca rastreabilidade. DataOps propõe os mesmos princípios: automação, testes, colaboração e feedback rápido, adaptados a fluxos ETL/ELT e modelos.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400&q=80&auto=format&fit=crop",
        alt: "Código e fluxo de trabalho em tela",
        caption: "Repositório, branches e pipelines de release trazem previsibilidade para mudanças em jobs de dados.",
      },
      {
        type: "h2",
        text: "O que versionar na prática",
      },
      {
        type: "p",
        text: "Scripts SQL, notebooks, definições de pipelines no ADF/Fabric, arquivos de infraestrutura como código e, cada vez mais, artefatos de modelo semântico (onde a ferramenta permitir). O repositório Git vira a fonte da verdade; o ambiente produtivo é alvo de deploy reproduzível, não de edição direta.",
      },
      {
        type: "h2",
        text: "Azure DevOps no cotidiano",
      },
      {
        type: "p",
        text: "Boards para backlog, pull requests para revisão, pipelines YAML para build e release em múltiplos estágios — tudo isso ajuda a separar “experimentação” de “promoção para produção”. Em projetos de BI, a mesma lógica vale para relatórios críticos: quem aprova a publicação, quais testes de regressão rodam (por exemplo, contagem de linhas, somas de reconciliação).",
      },
      {
        type: "blockquote",
        text: "Quando algo quebra no domingo à noite, você quer um commit e um log — não um mistério sobre quem alterou o que.",
      },
      {
        type: "h2",
        text: "Cultura e não só ferramenta",
      },
      {
        type: "p",
        text: "DataOps exige que engenheiros de dados, analistas e negócio compartilhem responsabilidade sobre SLAs. Revisões cruzadas, documentação mínima e rituais de retrospectiva após incidentes completam a foto — sem isso, Git sozinho não salva ninguém.",
      },
      {
        type: "p",
        text: "Se você usa Power BI com datasets publicados automaticamente após pipeline, alinhe com o time de BI corporativo quem aprova o deploy em produção — o mesmo rigor que aplicamos a aplicações web deve valer para relatórios que o conselho vê na segunda-feira de manhã.",
      },
    ],
  },
  {
    slug: "seguranca-lgpd-dados-azure",
    title: "Segurança, privacidade e LGPD em ambientes de dados na Azure",
    excerpt:
      "Criptografia e IAM são básicos; o desafio é política de dados, classificação, minimização e resposta a incidentes em pipelines analíticos — especialmente quando dados se replicam entre regiões e ferramentas de BI.",
    category: "Segurança & Compliance",
    date: "2026-01-18",
    readMinutes: 18,
    content: [
      {
        type: "p",
        text: "Migrar analytics para a nuvem não transfere automaticamente a responsabilidade sobre dados pessoais: o LGPD continua aplicável, e contratos com subprocessadores precisam estar claros. A Azure oferece matriz robusta de controles — criptografia em repouso e trânsito, identidades gerenciadas, Private Link, políticas de rede — mas o desenho de quem pode ver o quê continua sendo decisão da organização.",
      },
      {
        type: "p",
        text: "Em projetos com Power BI e integrações diversas, é fácil perder de vista onde cópias de tabelas com e-mail ou telefone foram parar. Um inventário simplificado — mesmo que comece em planilha — já ajuda a responder perguntas de auditoria: quais conjuntos são publicados externamente, quais ficam só em ambiente interno e quais campos foram mascarados.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1400&q=80&auto=format&fit=crop",
        alt: "Cadeado digital representando segurança",
        caption: "Segurança em nuvem combina controles nativos com política de classificação e revisão periódica de acessos.",
      },
      {
        type: "h2",
        text: "Classificação e minimização",
      },
      {
        type: "p",
        text: "Antes de replicar tudo para o lake, classifique colunas sensíveis e questione se todas precisam estar no ambiente analítico. Mascaramento, tokenização e agregação reduzem risco sem impedir análise. Em Power BI, políticas de RLS (Row-Level Security) e workspaces segregados ajudam a alinhar acesso ao perfil do usuário.",
      },
      {
        type: "h2",
        text: "Auditoria e incidentes",
      },
      {
        type: "p",
        text: "Habilite logs de acesso, monitore anomalias e tenha um playbook para vazamento ou acesso indevido — incluindo comunicação ao DPO e, se necessário, à ANPD. Ambientes de dados costumam ser alvo de ataque por conterem informação concentrada; backup e recuperação precisam ser testados, não apenas documentados.",
      },
      {
        type: "h3",
        text: "Observação prática",
      },
      {
        type: "p",
        text: "Compliance não é checklist de uma vez: mudanças em pipeline, novas integrações e uso de IA generativa sobre dados internos devem passar por revisão de privacidade. Documentar essas decisões evita sustos em auditoria futura.",
      },
    ],
  },
  {
    slug: "cultura-data-driven-alem-da-ferramenta",
    title: "Cultura data-driven: além da ferramenta, o processo de decisão",
    excerpt:
      "O melhor stack do mundo não adianta se as reuniões continuam decidindo por opinião. Como alinhar cultura, métricas e governança leve — e o papel que consultorias de dados podem ajudar a mediar entre áreas.",
    category: "Estratégia & Cultura",
    date: "2026-03-08",
    readMinutes: 12,
    content: [
      {
        type: "p",
        text: "Empresas compram licenças de BI, montam data lake e contratam consultoria — e ainda assim tomam decisões estratégicas no café informal. Ferramenta é habilitador; cultura é o que determina se os números entram na sala ou ficam no portal. Construir cultura data-driven é trabalho de liderança, não só de TI.",
      },
      {
        type: "p",
        text: "Consultorias com foco em Data & IA frequentemente trazem metodologias ágeis e facilitação — não só “entregáveis técnicos”. O valor está em criar rituais onde negócio e dados discutem prioridades com a mesma linguagem: quais hipóteses vamos testar este trimestre, com quais indicadores e qual nível de confiança aceitamos. Sem isso, o painel mais bonito do mundo continua sendo pano de fundo em apresentações.",
      },
      {
        type: "figure",
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80&auto=format&fit=crop",
        alt: "Equipe em reunião colaborativa",
        caption: "Cultura analítica exige espaço recorrente para dados na decisão — não só relatórios enviados por e-mail.",
      },
      {
        type: "h2",
        text: "Sinais de que a cultura ainda não acompanhou a tecnologia",
      },
      {
        type: "ul",
        items: [
          "Relatórios oficiais são ignorados em favor de planilhas paralelas.",
          "Metas mudam sem atualizar definições no BI.",
          "Áreas culpam “os dados” quando o problema é alinhamento de conceito.",
        ],
      },
      {
        type: "h2",
        text: "O papel da liderança",
      },
      {
        type: "p",
        text: "Gestores precisam pedir explicitamente evidência nas discussões, abrir espaço para dúvidas sobre métricas e reconhecer quando os dados mostram erro de hipótese — não só quando confirmam a intuição. Sem esse comportamento, o time de dados vira fábrica de relatórios que ninguém usa.",
      },
      {
        type: "h2",
        text: "Pequenos rituais que funcionam",
      },
      {
        type: "p",
        text: "Revisões semanais com um único painel oficial da operação; registro de decisões e suposições; retrospectivas trimestrais sobre qualidade dos indicadores. São práticas baratas que reforçam que dados são parte do processo, não anexo técnico.",
      },
      {
        type: "p",
        text: "Fechando: tecnologia de ponta sem mudança de comportamento vira custo. O caminho sustentável combina ferramentas certas, governança mínima viável e liderança que pede evidência com a mesma naturalidade com que hoje pede atualização de pipeline. É nesse ponto que projetos deixam de ser “implementação de BI” e viram transformação de como a empresa aprende com o próprio histórico.",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = blogPostsRaw.map((p) => ({
  ...p,
  coverImage: BLOG_COVERS[p.slug],
}));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);
}
