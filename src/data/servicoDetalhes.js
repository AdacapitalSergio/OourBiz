import fundoMpmes from "../assets/imagens/detalhe1.jpg";
import fundoStartups from "../assets/imagens/detalhe2.jpg";
import fundoEventos from "../assets/imagens/detalhe3.jpg";
import fundoMarketing from "../assets/imagens/detalhe4.jpg";
import fundoRecursos from "../assets/imagens/maosDadas.jpg";

import icon1 from "../assets/imagens/icon1.svg";
import icon2 from "../assets/imagens/icon2.svg";
import icon3 from "../assets/imagens/icon3.svg";
import icon4 from "../assets/imagens/icon4.svg";
import icon5 from "../assets/imagens/icon5.svg";

import fundoMPMEs from "../assets/imagens/fundoMPMEs.png";
import fundoStartup from "../assets/imagens/fundoStartup.png";
import fundoEvento from "../assets/imagens/fundoEventos.png";

import MPME1 from "../assets/imagens/MPME1.png";
import MPME2 from "../assets/imagens/MPME2.png";
import MPME3 from "../assets/imagens/MPME3.png";

import Startup1 from "../assets/imagens/Startup1.png";
import Startup2 from "../assets/imagens/Startup2.png";
import Startup3 from "../assets/imagens/Startup3.png";
import Startup4 from "../assets/imagens/Startup4.png";
import Startup5 from "../assets/imagens/Startup5.png";

import Evento1 from "../assets/imagens/Eventos1.png";
import Evento2 from "../assets/imagens/Eventos2.png";
import Evento3 from "../assets/imagens/Eventos3.png";

export const servicoDetalhes = [
    {
        id: 1,
        icon: icon1,
        titulo: "Consultoria para MPMEs",
        subt1: "1. Elaboração de Planos de Negócios",
        dessc1: "Criação de documentos estratégicos para orientar a estruturação e expansão de negócios. Inclui análise de mercado, plano financeiro e projeções de crescimento.",
        beneficios1: "Benefícios:",
        beneficios1li: [
            "Identificação de oportunidades de mercado;",
            "Maior clareza para tomada de decisões;",
            "Acesso a financiamentos ou investidores."
        ],
        sub2: "2. Estudos de Viabilidade",
        dessc2: "Avaliação técnica, financeira e de mercado para determinar o potencial de sucesso de projetos ou investimentos.",
        beneficios2: "Benefícios:",
        beneficios2li: [
            "Minimiza riscos financeiros;",
            "Direciona recursos para projetos mais promissores;",
            "Base sólida para convencer investidores."
        ],
        sub3: "3. Reestruturação Empresarial",
        dessc3: "Diagnóstico e implementação de melhorias em processos, finanças e gestão para otimizar resultados.",
        beneficios3: "Benefícios:",
        beneficios3li: [
            "Redução de custos operacionais;",
            "Aumento da eficiência e produtividade;",
            "Reposicionamento no mercado."
        ],
        imagem: fundoMpmes,
        textBotao1: "Consultar planos",
        textBotao2:"Solicitar servico"
    },
    {
        id: 2,
        icon: icon2,
        titulo: "Consultoria para Startups",
        subt1: "1. Ideação",
        dessc1: "Apoio no desenvolvimento de ideias inovadoras, validação de conceitos e criação do modelo inicial de negócios.",
        beneficios1: "Benefícios:",
        beneficios1li: [
            "Transformação de ideias em projetos estruturados;",
            "Redução de riscos ao validar o mercado antes do lançamento;",
            "Economia de tempo com foco em estratégias eficazes.",
        ],
        sub2: "2. Incubação",
        dessc2: "Fornecimento de mentoria, espaço físico e suporte administrativo para startups em estágio inicial.",
        beneficios2: "Benefícios:",
        beneficios2li: [
            "Redução de custos operacionais iniciais;",
            "Acesso a uma rede de mentores e investidores;",
            "Ambiente propício para inovação e networking.",
        ],
        sub3: "3. Desenvolvimento de MVP (Produto Mínimo Viável)",
        dessc3: "Auxílio no planejamento, design e desenvolvimento de protótipos funcionais para validação de mercado.",
        beneficios3: "Benefícios:",
        beneficios3li: [
            "Identificação de melhorias antes do lançamento completo;",
            "Economia de recursos ao evitar retrabalho;",
            "Atração de investidores com demonstração prática do conceito.",
        ],
        imagem: fundoStartups,
        textBotao1: "Consultar planos",
        textBotao2:"Solicitar servico"
    },
    {
        id: 3,
        icon: icon3,
        titulo: "Eventos e Formação",
        subt1: "1. Conferências e Palestras",
        dessc1: "Organização de eventos com especialistas para abordar temas de inovação, gestão e empreendedorismo.",
        beneficios1: "Benefícios:",
        beneficios1li: [
            "Disseminação de conhecimento prático e teórico.",
            "Conexão entre empreendedores, mentores e investidores;",
            "Fortalecimento da comunidade local de startups.",
        ],
        sub2: "2. Workshops e Capacitações",
        dessc2: "Treinamentos práticos para startups e MPMEs em áreas como marketing digital, gestão de negócios e inovação.",
        beneficios2: "Benefícios:",
        beneficios2li: [
            "Desenvolvimento de habilidades específicas.",
            "Aumento da competitividade no mercado.",
            "Conteúdo aplicável no dia a dia dos negócios.",
        ],
        imagem: fundoEventos,
        textBotao1: "Consultar planos",
        textBotao2:"Solicitar servico"
    },
    /*{
        id: 4,
        icon: icon4,
        titulo: "Marketing e estratégia",
        subt1: "1. Estratégias de Marketing Digital",
        dessc1: "Planeamento e execução de campanhas online para aumentar a visibilidade e atrair clientes.",
        beneficios1: "Benefícios:",
        beneficios1li: [
            "Crescimento rápido da marca;",
            "Maior alcance com menor custo em relação a mídias tradicionais;",
            "Resultados mensuráveis.",
        ],
        imagem: fundoMarketing,
        textBotao1: "Consultar planos",
        textBotao2:"Solicitar servico"
    },
    {
        id: 5,
        icon: icon5,
        titulo: "Apoio e captação de recursos",
        subt1: "1. Preparação para Pitch",
        dessc1: "Treinamento para apresentações de impacto a investidores, incluindo criação de pitch decks e estratégias de persuasão.",
        beneficios1: "Benefícios:",
        beneficios1li: [
            "Maior chance de captação de recursos;",
            "Apresentação mais profissional e confiante;",
            "Valorização do negócio aos olhos dos investidores.",
        ],
        sub2: "2. Acesso a Redes de Investidores",
        dessc2: "Conexão direta entre startups e potenciais investidores.",
        beneficios2: "Benefícios:",
        beneficios2li: [
            "Aumento das chances de financiamento;",
            "Rede ampliada de contatos estratégicos;",
            "CMentoria adicional de investidores experientes.",
        ],
        imagem: fundoRecursos,
        textBotao1: "Consultar planos",
        textBotao2:"Solicitar servico"
    },*/

]

export const area_atuacao = [
    {value:"Petróleo e Gás"},    
    {value:"Agricultura e Agroindústria"},
    {value:"Indústria Transformadora"},
    {value:"Mineração"},    
    {value:"Logística e Transporte"},
    {value:"Eventos e Formação"},
    {value:"Serviços e Comércio"},
    {value:"Energia e Água"},    
    {value:"Tecnologia e Inovação"},
    {value:"Educação e Saúde"}
]

export const servicos = [
    { value: "Consultoria_para_MPMEs", label: "Consultoria para MPMEs" },
    { value: "Consultoria_para_Startups", label: "Consultoria para Startups" },
    { value: "Eventos_e_Formação", label: "Eventos e Formação" },
];

export const sub_servicos = {
    Consultoria_para_MPMEs: ["Plano de negócios", "Estudos de viabilidade", "Reestruturação empresarial"],
    Consultoria_para_Startups: ["Ideação", "MVP (Produto Mínimo Viável)", "Preparação para o Pitch", "Incubação", "Acesso a investidores"],
    Eventos_e_Formação: ["Workshops", "Conferências e Palestras", "Capacitações"],
};

export const novos_servicos = [
    {
        id: 1,
        icon: icon1,
        titulo: "Consultoria para MPMEs",
        imagem: fundoMPMEs,
        pontos: ["Elaboração de Planos de Negócios", "Estudos de Viabilidade", "Reestruturação Empresarial"],
        sub_servicos: [
            {
                sub_titulo: "1. Elaboração de Planos de Negócios",
                descricoes: [
                    "Desenvolvemos planos de negócios profissionais e estruturados que ajudam empreendedores, empresas e startups a transformar ideias em projectos viáveis e sustentáveis.",
                    "O plano inclui análise de mercado, estratégia operacional, projeções financeiras e definição clara do modelo de negócio, permitindo tomar decisões mais seguras e atrair investidores ou financiamentos."
                ],
                beneficios: [
                    "Identificação de oportunidades de mercado",
                    "Maior clareza estratégica para o negócio",
                    "Planeamento financeiro estruturado",
                    "Apoio na obtenção de financiamento ou investimento"
                ],
                apartir: "A partir de",
                preco: ["49", "999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: MPME1,
            },
            {
                sub_titulo: "2. Estudos de Viabilidade",
                descricoes: [
                    "A OurBiz realiza estudos de viabilidade económica e financeira para avaliar se um projeto ou investimento possui condições reais de sucesso no mercado. O estudo analisa o mercado, custos, receitas potenciais, riscos e retorno do investimento."
                ],
                beneficios: [
                    "Avaliação clara da viabilidade do projeto",
                    "Identificação de riscos antes do investimento",
                    "Projeções financeiras estruturadas",
                    "Apoio na tomada de decisão estratégica"
                ],
                apartir: "A partir de",
                preco: ["249", "999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: MPME2,
            },
            {
                sub_titulo: "3. Reestruturação Empresarial",
                descricoes: [
                    "Serviço especializado para empresas que enfrentam desafios financeiros, operacionais ou estratégicos, ajudando a reorganizar a estrutura da empresa para melhorar resultados e garantir sustentabilidade."
                ],
                beneficios: [
                    "Melhoria da rentabilidade",
                    "Otimização da estrutura da empresa",
                    "Maior eficiência operacional",
                    "Recuperação de empresas em dificuldades"
                ],
                apartir: "A partir de",
                preco: ["99", "999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: MPME3,
            },
        ]
    },
    {
        id: 2,
        icon: icon2,
        titulo: "Consultoria para Startups",
        imagem: fundoStartup,
        pontos: [
            "Ideação de Negócios", 
            "Desenvolvimento de MVP", 
            "Preparação para Pitch", 
            "Incubação de Startups", 
            "Acesso a Redes de Investidores"
        ],
        sub_servicos: [
            {
                sub_titulo: "1. Ideação de Negócios",
                descricoes: [
                    "Serviço destinado a empreendedores que desejam transformar ideias em oportunidades reais de negócio, através de metodologias estruturadas de criação e validação de ideias."
                ],
                beneficios: [
                    "Transformação de ideias em oportunidades reais",
                    "Redução de erros no início do negócio",
                    "Maior clareza estratégica"
                ],
                apartir: "A partir de",
                preco: ["49", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Startup1,
            },
            {
                sub_titulo: "2. Desenvolvimento de MVP (Produto Mínimo Viável)",
                descricoes: [
                    " Criação da primeira versão funcional de um produto ou serviço para testar o mercado e validar a proposta de valor antes de grandes investimentos.",
                    "A OurBiz apoia startups no desenvolvimento do MVP (Produto Mínimo Viável), permitindo testar uma ideia de negócio no mercado com menor investimento e maior rapidez."
                ],
                beneficios: [
                    "Teste rápido da ideia de negócio",
                    "Redução de riscos de investimento",
                    "Validação com clientes reais",
                    "Base para captação de investimento"
                ],
                apartir: "A partir de",
                preco: ["29", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Startup2,
            },
            {
                sub_titulo: "3. Preparação para Pitch",
                descricoes: [
                    "Serviço de preparação para apresentações a investidores, parceiros ou instituições financeiras."
                ],
                beneficios: [
                    "Criação de Pitch Deck profissional",
                    "Treinamento de apresentação",
                    "Estruturação da proposta de valor",
                    "Maior probabilidade de atrair investidores"
                ],
                apartir: "A partir de",
                preco: ["34", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Startup3,
            },
            {
                sub_titulo: "4. Incubação de Startups",
                descricoes: [
                    "Programa estruturado para apoiar startups desde a fase inicial até a validação do modelo de negócio, com mentoria especializada e acesso a redes de investidores.",
                    "A incubação da OurBiz é um programa seletivo. Nem todas as candidaturas são aprovadas, pois o objetivo é trabalhar com startups com real potencial de crescimento e impacto."
                ],
                beneficios: [
                    "Aceleração do crescimento da startup",
                    "Acesso a mentores especializados",
                    "Apoio na validação do mercado",
                    "Preparação para captação de investimento"
                ],
                apartir: "A partir de",
                preco: ["49", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Startup4,
            },
            {
                sub_titulo: "5. Acesso a Redes de Investidores",
                descricoes: [
                    "A OurBiz apoia startups e empresas na conexão com investidores, parceiros estratégicos e instituições de financiamento, facilitando o acesso a capital para crescimento"
                ],
                beneficios: [
                    "Conexão com potenciais investidores",
                    "Apoio na negociação de investimentos",
                    "Preparação de documentação estratégica",
                    "Aumento das oportunidades de financiamento"
                ],
                apartir: "A partir de",
                preco: ["49", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Sob consulta ou taxa de sucesso",
                imagem_sub_servico: Startup5,
            },
        ]
    },
    {
        id: 3,
        icon: icon3,
        titulo: "Eventos e formação",
        imagem: fundoEvento,
        pontos: [
            "Conferências e Palestras",
            "Workshops para MPMEs",
            "Capacitações Empresariais"
        ],
        sub_servicos: [
            {
                sub_titulo: "1. Conferências e Palestras",
                descricoes: [
                    "A OurBiz organiza conferências e palestras sobre empreendedorismo, inovação e gestão empresarial, destinadas a empreendedores, gestores e instituições."
                ],
                beneficios: [
                    "Acesso a conhecimento atualizado",
                    "Networking empresarial",
                    "Inspiração e partilha de experiências",
                    "Aprendizagem prática"
                ],
                apartir: "A partir de",
                preco: ["9", ".999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Evento1,
            },
            {
                sub_titulo: "2. Workshops para MPMEs",
                descricoes: [
                    "Workshops práticos focados no desenvolvimento de competências empresariais, destinados a proprietários de micro, pequenas e médias empresas."
                ],
                beneficios: [
                    "Aprendizagem prática",
                    "Aplicação imediata no negócio",
                    "Desenvolvimento de competências de gestão",
                    "Networking com outros empresários"
                ],
                apartir: "A partir de",
                preco: ["9", "999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Evento2,
            },
            {
                sub_titulo: "3. Capacitações Empresariais",
                descricoes: [
                    "Programas de formação destinados a funcionários e gestores de MPMEs, focados no desenvolvimento de competências técnicas e de gestão."
                ],
                beneficios: [
                    "Melhoria do desempenho da equipa",
                    "Profissionalização da gestão",
                    "Aumento da produtividade",
                    "Formação aplicada à realidade das empresas"
                ],
                apartir: "A partir de",
                preco: ["9", "999 kz"],
                valor_final: "O valor final dependerá de fatores como:",
                fatores: [
                    "Dimensão do projeto",
                    "Sector de atividade",
                    "Complexidade do estudo"
                ],
                pagamento_inicial: "Pagamento inicial de 50% do valor total",
                imagem_sub_servico: Evento3,
            },
        ]
    }
]
