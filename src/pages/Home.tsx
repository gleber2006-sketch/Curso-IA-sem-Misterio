import { useState } from "react"
import { Brain, Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"

const modules = [
  { id: 1, title: "Módulo 1 - Boas-Vindas", section: "module1" },
  { id: 2, title: "Módulo 2 - O Que É IA de Verdade", section: "module2" },
  { id: 3, title: "Módulo 3 - Por Que Agora?", section: "module3" },
  { id: 4, title: "Mitos Comuns Sobre IA", section: "myths" },
  { id: 5, title: "Módulo 4 - As Ferramentas", section: "module4" },
  { id: 6, title: "Módulo 5 - Como Conversar com a IA", section: "module5" },
  { id: 7, title: "Módulo 6 - IA Aplicada à Sua Área", section: "module6" },
  { id: 8, title: "Módulo 7 - Automatizando", section: "module7" },
  { id: 9, title: "Como Apresentar no Trabalho", section: "apresentar" },
  { id: 10, title: "Módulo 8 - Cuidados e Ética", section: "module8" },
  { id: 11, title: "Módulo 9 - Plano de 7 Dias", section: "module9" },
  { id: 12, title: "Bônus", section: "bonus-header" },
  { id: 13, title: "Resumo Rápido", section: "resumo" },
  { id: 14, title: "Considerações Finais", section: "final" },
]

const applications = [
  {
    title: "Vendas e Atendimento",
    desc: "Escrever respostas para objeções, montar roteiros de ligação, sugerir follow-ups educados.",
  },
  {
    title: "Atendimento ao Cliente",
    desc: "Transformar reclamações em respostas profissionais, padronizar mensagens de boas-vindas.",
  },
  {
    title: "Educação",
    desc: "Criar planos de aula, gerar exercícios, adaptar explicações para diferentes idades.",
  },
  {
    title: "Saúde (Administrativa)",
    desc: "Organizar comunicação, redigir avisos, criar materiais educativos simples.",
  },
  {
    title: "Advocacia",
    desc: "Resumir documentos longos, organizar linhas do tempo, revisar clareza de textos.",
  },
  {
    title: "Contabilidade",
    desc: "Explicar termos financeiros, redigir comunicados sobre prazos fiscais.",
  },
  {
    title: "Marketing",
    desc: "Criar legendas, ideias de conteúdo, roteiros de vídeos, calendários editoriais.",
  },
  {
    title: "Recursos Humanos",
    desc: "Escrever descrições de vaga, organizar roteiros de entrevista, redigir comunicados internos.",
  },
  {
    title: "Indústria e Logística",
    desc: "Redigir procedimentos padrão, organizar checklists, traduzir manuais técnicos.",
  },
  {
    title: "Hotelaria e Turismo",
    desc: "Criar roteiros de boas-vindas, responder dúvidas de hóspedes, montar descrições de pacotes.",
  },
  {
    title: "E-commerce",
    desc: "Escrever descrições de produtos atrativas, gerar variações de anúncios.",
  },
  {
    title: "Criadores de Conteúdo",
    desc: "Gerar pautas, organizar roteiros, revisar textos antes da publicação.",
  },
  {
    title: "Autônomos",
    desc: "Escrever orçamentos, responder perguntas frequentes, organizar agenda.",
  },
]

const bonuses = [
  { id: 1, title: "Perguntas Frequentes", section: "bonus1" },
  { id: 2, title: "Erros Comuns de Quem Está Começando", section: "bonus2" },
  { id: 3, title: "Glossário Rápido", section: "bonus3" },
  { id: 4, title: "39 Pedidos Prontos", section: "bonus4" },
  { id: 5, title: "Renda Extra com IA", section: "bonus5" },
  { id: 6, title: "Um Dia na Vida, Com e Sem IA", section: "bonus6" },
]

const weekPlan = [
  { day: "Dia 1", title: "Entenda o Básico", desc: "Reforce o que é IA, seus tipos. Escolha sua primeira ferramenta e faça seu primeiro prompt." },
  { day: "Dia 2", title: "Domine o Método C.A.F.E.", desc: "Pratique construindo prompts com Contexto, Ação, Formato e Exemplo. Compare resultados." },
  { day: "Dia 3", title: "IA na Sua Área", desc: "Encontre exemplos de uso de IA na sua área de atuação e adapte um pedido para uma tarefa real." },
  { day: "Dia 4", title: "Automatize uma Tarefa", desc: "Identifique uma tarefa repetitiva e crie um prompt 'mestre' que você possa reutilizar." },
  { day: "Dia 5", title: "Explore Criação de Imagens", desc: "Experimente uma ferramenta de geração de imagens e crie suas primeiras imagens com IA." },
  { day: "Dia 6", title: "Consciência e Ética", desc: "Reforce os cuidados, limites e aspectos éticos. Autoavalie seu uso de IA." },
  { day: "Dia 7", title: "Integre e Planeje", desc: "Revise seu progresso, escolha uma nova tarefa e mantenha-se atualizado sobre IA." },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20">
        <div className="container flex items-center justify-between py-4 mx-auto px-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold text-white">IA Sem Mistério</h1>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={() => scrollTo("module1")}>Início</Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={() => scrollTo("module5")}>Prompts</Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={() => scrollTo("module6")}>Aplicações</Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-blue-500/20 bg-slate-800">
            <div className="container mx-auto py-4 space-y-2 px-4">
              {modules.map((m) => (
                <button
                  key={m.id}
                  onClick={() => scrollTo(m.section)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-500/10 rounded"
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">IA Sem Mistério</h2>
            <p className="text-xl text-gray-300 mb-8">
              O guia simples para qualquer profissional dominar a inteligência artificial, mesmo sem entender nada de tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollTo("module1")}>
                Começar a Leitura
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10" onClick={() => scrollTo("module5")}>
                Ver Prompts
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/capa_ebook.png"
              alt="Capa do Ebook"
              className="w-full rounded-lg shadow-2xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-8">Sumário</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((m) => (
              <button
                key={m.id}
                onClick={() => scrollTo(m.section)}
                className="text-left p-4 rounded-lg bg-slate-700/50 hover:bg-blue-500/20 transition-colors text-gray-300 hover:text-white"
              >
                {m.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="module1" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 1 - Boas-Vindas</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Imagine a seguinte cena: você está em uma reunião de trabalho e alguém comenta, com total naturalidade, "ah, isso eu resolvi com IA em cinco minutos". Todo mundo assente com a cabeça, como se fosse a coisa mais óbvia do mundo. Você sorri, concorda, e por dentro pensa: "eu nem sei por onde começar com isso".
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Se essa cena já aconteceu com você ou algo parecido, este material foi escrito exatamente para esse momento. Não para te transformar em especialista em tecnologia, e sim para tirar essa sensação de estar "por fora" e te colocar, em poucos dias, em um nível de uso prático e seguro da inteligência artificial.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Para quem é esse material</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Este conteúdo foi escrito para qualquer pessoa que trabalha, como funcionário, autônomo, dono de pequeno negócio, profissional liberal ou prestador de serviço, e que sente que a inteligência artificial é "coisa de gente de tecnologia". Não é. Na prática, ela funciona como uma ferramenta de trabalho, parecida com uma calculadora ou um aplicativo de planilha.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">O que você vai conseguir até o final</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Explicar com suas próprias palavras o que é inteligência artificial, sem decorar termos técnicos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Escolher, sem se perder em opções demais, qual tipo de ferramenta usar para cada tarefa.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Escrever pedidos (prompts) que realmente trazem respostas úteis, prontas para usar.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Aplicar a IA em pelo menos três tarefas reais da sua rotina de trabalho, já nesta semana.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Reconhecer os limites, riscos e cuidados da tecnologia, para usá-la com segurança.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="module2" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 2 - O Que É IA de Verdade (Sem Jargão)</h2>
          <img
            src="/images/modulo2_ia.png"
            alt="Ilustração Módulo 2"
            className="w-full rounded-lg mb-8 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          />
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Antes de qualquer coisa, vamos desfazer um mal-entendido comum: inteligência artificial não é um robô pensante, não tem vontade própria e não está "viva". O nome, escolhido décadas atrás por pesquisadores, acabou sendo um pouco mais dramático do que o que a tecnologia realmente faz.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Uma explicação sem enrolação</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Pense na IA como um sistema treinado lendo uma quantidade gigantesca de texto, imagens e informações (livros, sites, conversas, manuais, artigos) produzidos por seres humanos ao longo de décadas. A partir desse treinamento, ela aprendeu a reconhecer padrões.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Os três tipos de IA que você vai usar</h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">IA de conversa (chatbots)</h4>
                <p className="text-gray-300">Você escreve o que precisa e ela responde em texto. Serve para escrever, resumir, explicar, traduzir, organizar ideias e responder dúvidas.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">IA de criação de imagem</h4>
                <p className="text-gray-300">Você descreve uma imagem em palavras e ela gera essa imagem do zero, em segundos. Útil para artes, ilustrações, capas e materiais visuais.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">IA de automação</h4>
                <p className="text-gray-300">Ferramentas que usam IA "por trás das cortinas", conectando tarefas automaticamente: organizando respostas, classificando e-mails ou preenchendo planilhas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module3" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 3 - Por Que Agora? O Furacão Que Virou Oportunidade</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Você provavelmente notou que essa conversa sobre IA explodiu de forma muito mais intensa do que outras novidades tecnológicas anteriores. Isso não é acaso, e entender o motivo ajuda a tirar o medo do caminho.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">O que mudou de verdade</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Por muito tempo, ferramentas de inteligência artificial exigiam conhecimento técnico para serem usadas. O que mudou nos últimos anos foi a forma de interação: hoje você simplesmente escreve em português comum, como se estivesse mandando uma mensagem de texto, e a ferramenta entende o que você quer.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Por que isso parece um furacão</h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Acesso fácil</h4>
                <p className="text-gray-300">Hoje qualquer pessoa com celular e internet consegue usar ferramentas poderosas de graça ou por um valor baixo.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Velocidade de evolução</h4>
                <p className="text-gray-300">Novas versões e funções chegam em poucos meses, não em anos.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Adoção em massa</h4>
                <p className="text-gray-300">Empresas de todos os tamanhos passaram a usar IA em tarefas do dia a dia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="myths" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Mitos Comuns Sobre Inteligência Artificial</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              É natural que uma tecnologia tão disruptiva como a IA gere uma série de mitos e concepções errôneas. Desmistificar alguns dos mais comuns é crucial para uma compreensão clara e um uso eficaz.
            </p>
            <div className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Mito 1: A IA vai roubar todos os empregos</h4>
                <p className="text-gray-300">Embora a IA vá transformar muitas profissões, a história mostra que novas tecnologias tendem a criar mais empregos do que eliminam.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Mito 2: A IA é consciente e tem sentimentos</h4>
                <p className="text-gray-300">A IA atual não possui consciência, emoções ou vontade própria. Ela opera com base em algoritmos e dados.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Mito 3: Usar IA exige ser um expert em tecnologia</h4>
                <p className="text-gray-300">As ferramentas de IA modernas são projetadas para serem intuitivas e acessíveis, permitindo que usuários sem conhecimento técnico as utilizem.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Mito 4: A IA é infalível</h4>
                <p className="text-gray-300">As IAs são tão boas quanto os dados com os quais foram treinadas. Elas podem cometer erros e gerar informações incorretas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module4" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 4 - As Ferramentas Que Realmente Importam</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Com a proliferação de ferramentas de IA, pode ser esmagador saber por onde começar. O foco aqui é nas ferramentas mais acessíveis e versáteis para o dia a dia do profissional.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Ferramentas de IA de Conversa</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">ChatGPT</h4>
                <p className="text-gray-300">Desenvolvido pela OpenAI, é um dos modelos de linguagem mais conhecidos. Excelente para geração de texto e brainstorming.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Google Gemini</h4>
                <p className="text-gray-300">A resposta do Google ao ChatGPT, integrado com a vasta base de conhecimento da internet. Ótimo para informações atualizadas.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Microsoft Copilot</h4>
                <p className="text-gray-300">Oferece funcionalidades semelhantes, com a vantagem de estar integrado ao navegador Edge e ao motor de busca Bing.</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Ferramentas de Criação de Imagem</h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Midjourney</h4>
                <p className="text-gray-300">Conhecido por gerar imagens de alta qualidade e artisticamente impressionantes a partir de prompts de texto.</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">DALL-E 3</h4>
                <p className="text-gray-300">Outra ferramenta poderosa da OpenAI, capaz de criar imagens realistas e diversas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module5" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 5 - Como "Conversar" Com a IA</h2>
          <img
            src="/images/modulo5_prompts.png"
            alt="Ilustração Módulo 5"
            className="w-full rounded-lg mb-8 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          />
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A qualidade da resposta da IA está diretamente ligada à qualidade do seu pedido. Aprender a se comunicar eficazmente com a inteligência artificial é a habilidade mais valiosa neste novo cenário.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">O Método C.A.F.E.</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O método C.A.F.E. é um acrônimo simples para lembrar os elementos essenciais de um bom prompt:
            </p>
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">C - Contexto</h4>
                <p className="text-gray-300">Explique a situação, o cenário e o seu papel. A IA precisa entender "quem" você é e "onde" você está.</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">A - Ação</h4>
                <p className="text-gray-300">Diga claramente o que você quer que a IA faça. Use verbos de ação como "escreva", "resuma", "crie".</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">F - Formato</h4>
                <p className="text-gray-300">Indique como você quer receber a resposta. Uma lista, um texto corrido, um e-mail formal, uma mensagem de WhatsApp.</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">E - Exemplo</h4>
                <p className="text-gray-300">Sempre que puder, dê um exemplo do estilo que você quer, ou de algo parecido que já funcionou antes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module6" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 6 - IA Aplicada à Sua Área de Trabalho</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A IA pode ser aplicada em praticamente todas as profissões. Aqui estão alguns exemplos práticos:
            </p>
            <div className="grid gap-4">
              {applications.map((app, i) => (
                <div key={i} className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="text-blue-400 font-semibold mb-2">{app.title}</h4>
                  <p className="text-gray-300 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="module7" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 7 - Automatizando o Dia a Dia</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Depois de praticar pedidos individuais, o próximo passo natural é criar pequenas rotinas que economizam tempo de forma repetida, semana após semana.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Comece com "modelos" prontos</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma das formas mais simples de automatizar sem precisar de nenhuma ferramenta nova é guardar, em um documento ou bloco de notas, os pedidos que funcionaram bem para você e reutilizá-los toda semana, só trocando os detalhes específicos.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Ferramentas de automação simples</h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">Zapier e Make</h4>
                <p className="text-gray-300">Plataformas de automação que permitem integrar diversas ferramentas de IA com seus aplicativos de trabalho diário, como e-mail, planilhas e CRMs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apresentar" className="py-16 border-t border-blue-500/20 bg-blue-500/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Como Apresentar Isso Para Seu Chefe ou Sua Equipe</h2>
          <img
            src="/images/apresentar.svg"
            alt="Ilustração apresentar IA no trabalho"
            className="w-full rounded-lg mb-8 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          />
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Se você é funcionário e não dono do negócio, talvez surja uma dúvida natural: "posso usar isso no trabalho, ou preciso de autorização?". Este capítulo curto ajuda a navegar essa situação com segurança.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Comece testando em tarefas pessoais de baixo risco</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Antes de propor qualquer mudança formal, pratique em tarefas que já são suas, de baixo risco: organizar suas próprias anotações, melhorar um rascunho de e-mail antes de enviar, resumir um documento para seu próprio entendimento. Isso te dá experiência real para falar sobre o assunto com confiança, sem depender de aprovação prévia.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Leve resultados, não apenas a ideia</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Gestores costumam reagir melhor a um resultado concreto do que a uma proposta abstrata. Em vez de chegar dizendo "podemos usar IA no nosso setor?", chegue mostrando: "usei IA para organizar este relatório em metade do tempo, veja o resultado. Será que vale a pena aplicarmos isso em outras tarefas da equipe?".
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Respeite as políticas da empresa</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Empresas diferentes têm regras diferentes sobre o uso de ferramentas externas, especialmente quando envolvem dados de clientes. Antes de usar IA com qualquer informação que não seja exclusivamente sua, verifique se existe uma política interna sobre o assunto, e siga as orientações sobre dados sensíveis.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Compartilhe o aprendizado com a equipe</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma vez que você já tenha resultados práticos, compartilhar o que aprendeu, inclusive os pedidos prontos que funcionaram bem, costuma gerar valor para toda a equipe, e fortalece sua posição como alguém que está à frente, em vez de atrás, dessa mudança.
            </p>
          </div>
        </div>
      </section>

      <section id="module8" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 8 - Cuidados, Limites e Ética</h2>
          <img
            src="/images/modulo8_etica.png"
            alt="Ilustração Módulo 8"
            className="w-full rounded-lg mb-8 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          />
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              O uso da inteligência artificial, embora poderoso, exige responsabilidade e consciência de seus limites. Ignorar esses aspectos pode levar a erros graves e consequências indesejadas.
            </p>
            <div className="space-y-4">
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-yellow-400 font-semibold mb-2">⚠️ As "Alucinações" da IA</h4>
                <p className="text-gray-300">Um dos maiores riscos é a "alucinação": a tendência de gerar informações falsas com grande confiança. Sempre revise e valide as informações factuais geradas pela IA.</p>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Vieses e Discriminação</h4>
                <p className="text-gray-300">As IAs podem reproduzir vieses presentes nos dados de treinamento. Esteja ciente dessa possibilidade e revise respostas enviesadas.</p>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                <h4 className="text-yellow-400 font-semibold mb-2">⚠️ Privacidade e Segurança</h4>
                <p className="text-gray-300">Evite inserir informações confidenciais em chatbots públicos. Verifique sempre as políticas de privacidade e segurança da ferramenta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module9" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 9 - Seu Plano de Ação de 7 Dias</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Para integrar a IA de forma eficaz em sua rotina, a chave é a prática consistente. Este plano oferece um roteiro simples para começar a usar a IA de maneira produtiva.
            </p>
            <div className="space-y-4">
              {weekPlan.map((item, i) => (
                <div key={i} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-400/30">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400/50">
                        <span className="text-blue-400 font-bold text-sm">{i + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-blue-300 font-semibold">{item.day}: {item.title}</h4>
                      <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bonus-header" className="py-16 border-t border-blue-500/20 bg-amber-500/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">🎯 Bônus Exclusivos</h2>
            <p className="text-gray-300 text-lg">
              Conteúdos extras para acelerar ainda mais seu domínio da inteligência artificial.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {bonuses.map((b) => (
              <button
                key={b.id}
                onClick={() => scrollTo(b.section)}
                className="text-left p-4 rounded-lg bg-slate-700/50 hover:bg-amber-500/20 transition-colors border border-amber-500/20 hover:border-amber-500/40 text-gray-300 hover:text-white"
              >
                <span className="text-amber-400 font-bold">Bônus {b.id}</span>
                <p className="text-sm mt-1">{b.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="bonus1" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">Bônus 1 - Perguntas Frequentes</h2>
          <p className="text-amber-400 text-sm mb-6">Tire as dúvidas mais comuns de quem está começando</p>
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Preciso pagar para usar IA?"</h4>
              <p className="text-gray-300">Não, na maioria dos casos. As principais ferramentas de conversa têm versões gratuitas robustas, suficientes para praticar tudo o que está neste material. Versões pagas existem e oferecem recursos extras, mas não são necessárias para começar.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Meus dados ficam seguros?"</h4>
              <p className="text-gray-300">Depende da ferramenta e de como você a usa. Evite compartilhar dados sensíveis e sempre revise as configurações de privacidade disponíveis no aplicativo escolhido.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Vou perder meu emprego para a IA?"</h4>
              <p className="text-gray-300">O padrão mais comum observado até agora é a substituição de tarefas específicas dentro de uma função, não da função inteira. Profissionais que aprendem a usar a IA como apoio tendem a se tornar mais produtivos e mais valiosos, não menos.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Quanto tempo leva para ficar bom nisso?"</h4>
              <p className="text-gray-300">Seguindo o plano de 7 dias, a maioria das pessoas já sente confiança real em uma a duas semanas de prática constante, mesmo que curta.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"E se eu não tiver tempo todos os dias?"</h4>
              <p className="text-gray-300">Está tudo bem. O importante é a consistência ao longo das semanas, não a perfeição diária. Pular um dia e retomar no seguinte já é suficiente para manter o progresso.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"A IA entende português do Brasil bem?"</h4>
              <p className="text-gray-300">Sim, as principais ferramentas atuais lidam muito bem com português brasileiro, incluindo expressões informais e regionalismos comuns.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Posso usar IA para responder clientes diretamente, sem revisar?"</h4>
              <p className="text-gray-300">Para mensagens simples e de baixo risco, muitos profissionais já fazem isso com tranquilidade. Para qualquer comunicação com impacto financeiro, legal ou de imagem, a revisão humana, mesmo que rápida, continua sendo recomendada.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Existe um limite de quantas perguntas posso fazer?"</h4>
              <p className="text-gray-300">Versões gratuitas costumam ter algum limite de uso diário ou mensagem, que varia entre ferramentas e muda com frequência. Na prática, esse limite raramente impede o uso descrito neste material.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Preciso escrever em inglês para ter resultados melhores?"</h4>
              <p className="text-gray-300">Não. As ferramentas atuais respondem muito bem em português, e não há necessidade de escrever em outro idioma para obter boas respostas no dia a dia de trabalho.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Posso usar o mesmo pedido em ferramentas diferentes?"</h4>
              <p className="text-gray-300">Sim, na grande maioria dos casos. O método C.A.F.É. funciona de forma parecida em qualquer assistente de conversa, já que todos foram feitos para entender linguagem natural.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"O que faço se a resposta da IA parecer estranha?"</h4>
              <p className="text-gray-300">Trate como uma conversa: explique o que não ficou bom e peça um ajuste específico, em vez de aceitar ou descartar a resposta de uma vez. Na maioria das vezes, um ou dois ajustes resolvem completamente.</p>
            </div>
            <div className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
              <h4 className="text-amber-300 font-semibold mb-2">"Vale a pena usar IA se eu já sou bom no que faço?"</h4>
              <p className="text-gray-300">Sim. A IA não substitui a sua experiência. Ela acelera a parte mecânica do trabalho, deixando mais tempo livre exatamente para aplicar essa experiência onde ela faz mais diferença.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus2" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Bônus 2 - Erros Comuns de Quem Está Começando</h2>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Esperar perfeição na primeira tentativa</h4>
                <p className="text-gray-300">O resultado costuma melhorar bastante após um ou dois ajustes. Não desista na primeira resposta fraca.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Não dar contexto suficiente</h4>
                <p className="text-gray-300">Pedidos vagos geram respostas vagas. Quanto mais específico o contexto, melhor o resultado.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Confiar cegamente em informações factuais</h4>
                <p className="text-gray-300">Sempre confira números, datas e dados específicos antes de usar em algo importante.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Tentar aprender tudo de uma vez</h4>
                <p className="text-gray-300">Focar em uma ferramenta e algumas tarefas reais por vez gera resultados muito mais rápidos do que tentar dominar todas as categorias ao mesmo tempo.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Compartilhar informações sensíveis sem necessidade</h4>
                <p className="text-gray-300">Revise sempre o que está sendo digitado antes de enviar.</p>
              </div>
              <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                <h4 className="text-red-400 font-semibold mb-2">🚫 Desistir após um uso isolado</h4>
                <p className="text-gray-300">O verdadeiro ganho aparece com o uso semanal e contínuo, não com uma tentativa única.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus3" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Bônus 3 - Glossário Rápido</h2>
          <p className="text-gray-300 text-lg mb-6">Termos essenciais para você entender e conversar sobre IA com confiança.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { term: "Inteligência Artificial (IA)", def: "Sistemas treinados para identificar padrões em grandes quantidades de dados e gerar respostas, textos ou imagens a partir disso." },
              { term: "IA Generativa", def: "Tipo de IA que cria conteúdo novo (texto, imagem, áudio) em vez de apenas analisar dados existentes." },
              { term: "Prompt", def: "O pedido ou instrução que você escreve para a IA." },
              { term: "Alucinação", def: "Quando a IA apresenta uma informação falsa como se fosse verdadeira, sem avisar que está incerta." },
              { term: "Modelo de Linguagem", def: "O \"motor\" por trás dos assistentes de conversa, treinado com grandes quantidades de texto." },
              { term: "Automação", def: "Processos que passam a acontecer sozinhos, sem precisar de ação manual repetida." },
              { term: "Chatbot", def: "Programa que conversa com você em formato de chat, podendo ou não usar IA avançada." },
              { term: "Viés (Bias)", def: "Tendência de uma resposta refletir preconceitos ou visões parciais presentes nos dados usados no treinamento." },
              { term: "Treinamento", def: "Processo pelo qual a IA \"aprende\" padrões a partir de uma grande quantidade de dados." },
              { term: "Contexto", def: "As informações de fundo que você fornece à IA para que ela entenda melhor sua situação antes de responder." },
              { term: "Multimodal", def: "Capacidade de uma ferramenta de IA de trabalhar com mais de um tipo de conteúdo ao mesmo tempo." },
              { term: "Histórico de Conversa", def: "O conjunto de mensagens trocadas até o momento, que a IA usa como referência para manter a coerência." },
              { term: "Ajuste Fino", def: "Processo de adaptar ainda mais uma resposta da IA através de instruções adicionais." },
              { term: "Assistente de IA", def: "Nome comum dado às ferramentas de conversa que ajudam em tarefas do dia a dia." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-700/30 p-4 rounded-lg border border-amber-500/20">
                <h4 className="text-amber-300 font-semibold text-sm mb-1">{item.term}</h4>
                <p className="text-gray-400 text-xs">{item.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bonus4" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">Bônus 4 - 39 Pedidos Prontos Para Copiar e Adaptar</h2>
          <p className="text-amber-400 text-sm mb-6">Use estes modelos como ponto de partida. Basta substituir as informações entre colchetes pela sua realidade.</p>
          <div className="prose prose-invert max-w-none">
            <div className="space-y-3">
              {[
                "\"Escreva uma mensagem de WhatsApp para avisar [tipo de cliente] sobre [situação], em tom [formal/informal], com no máximo [número] frases.\"",
                "\"Resuma este texto em [número] bullet points, mantendo apenas as informações essenciais: [colar o texto].\"",
                "\"Explique [termo técnico] como se eu fosse um cliente sem nenhum conhecimento sobre o assunto.\"",
                "\"Crie [número] ideias de conteúdo para redes sociais sobre [tema], voltadas para [público-alvo].\"",
                "\"Escreva uma resposta educada para um cliente insatisfeito com [motivo da insatisfação], oferecendo [solução].\"",
                "\"Revise este texto e sugira melhorias de clareza, mantendo o mesmo significado: [colar o texto].\"",
                "\"Monte um roteiro de ligação para apresentar [produto/serviço] a um cliente que [situação específica].\"",
                "\"Traduza este texto para [idioma], mantendo um tom [formal/informal]: [colar o texto].\"",
                "\"Crie uma lista de perguntas frequentes sobre [produto/serviço], com respostas curtas e diretas.\"",
                "\"Escreva uma descrição de vaga para [cargo], destacando [requisitos principais].\"",
                "\"Organize estas informações em uma tabela com as colunas [definir colunas]: [colar informações].\"",
                "\"Sugira três formas diferentes de responder a esta objeção de venda: [descrever objeção].\"",
                "\"Escreva um comunicado interno avisando a equipe sobre [assunto], em tom profissional e claro.\"",
                "\"Crie um checklist de documentos necessários para [processo específico].\"",
                "\"Adapte este texto para uma linguagem mais simples, como se fosse explicado para alguém de 12 anos: [colar texto].\"",
                "\"Escreva um e-mail de cobrança educado para um cliente com pagamento atrasado há [número] dias.\"",
                "\"Sugira um cronograma de postagens para a próxima semana sobre [tema do negócio].\"",
                "\"Crie uma mensagem de aniversário personalizada para enviar a clientes fiéis.\"",
                "\"Resuma esta reunião em tópicos com as decisões tomadas e os próximos passos: [colar anotações].\"",
                "\"Escreva três variações de título para um anúncio sobre [produto/serviço].\"",
                "\"Explique as vantagens de [produto/serviço] de forma simples, comparando com a alternativa mais comum do mercado.\"",
                "\"Crie um roteiro de boas-vindas para um novo funcionário, explicando [informações da empresa].\"",
                "\"Sugira respostas gentis para perguntas difíceis de clientes sobre [tema sensível].\"",
                "\"Transforme estas anotações soltas em um texto corrido e organizado: [colar anotações].\"",
                "\"Escreva uma mensagem de agradecimento para um cliente que acabou de fechar negócio.\"",
                "\"Crie uma resposta padrão para quem pergunta sobre formas de pagamento aceitas pelo meu negócio.\"",
                "\"Sugira um nome curto e memorável para [tipo de produto ou serviço].\"",
                "\"Escreva uma mensagem de aviso sobre mudança de horário de funcionamento durante [período/feriado].\"",
                "\"Crie um roteiro simples de apresentação de trinta segundos sobre o meu negócio, para usar em eventos de networking.\"",
                "\"Liste possíveis perguntas que um cliente pode fazer antes de comprar [produto/serviço], com respostas curtas para cada uma.\"",
                "\"Escreva uma mensagem pedindo educadamente uma avaliação ou depoimento a um cliente satisfeito.\"",
                "\"Transforme esta reclamação em um resumo objetivo, destacando o problema principal e a solução esperada: [colar reclamação].\"",
                "\"Sugira três formas de encerrar uma reunião de forma produtiva, com encaminhamento claro dos próximos passos.\"",
                "\"Crie uma mensagem de boas-vindas para novos seguidores ou clientes em um grupo de WhatsApp ou comunidade online.\"",
                "\"Escreva uma resposta padrão para clientes que perguntam sobre prazo de entrega ou execução do serviço.\"",
                "\"Sugira três perguntas para fazer a um cliente antes de fechar um orçamento, para entender melhor a necessidade dele.\"",
                "\"Crie uma mensagem curta para reativar clientes antigos que não compram ou não agendam há algum tempo.\"",
                "\"Escreva uma justificativa profissional para pedir um reajuste de preço aos clientes atuais.\"",
                "\"Resuma os pontos principais de um e-mail longo recebido, destacando o que exige resposta imediata: [colar e-mail].\"",
              ].map((prompt, i) => (
                <div key={i} className="bg-slate-700/30 p-3 rounded-lg border border-slate-600/50 hover:border-amber-500/30 transition-colors">
                  <span className="text-amber-400 font-bold text-xs mr-2">#{i + 1}</span>
                  <span className="text-gray-300 text-sm">{prompt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bonus5" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">Bônus 5 - Transformando Esse Conhecimento em Renda Extra</h2>
          <p className="text-amber-400 text-sm mb-6">Depois de aplicar a IA na sua rotina, você pode ajudar quem ainda está perdido e ganhar com isso.</p>
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Ajudando pequenos negócios locais</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Donos de pequenos comércios, salões, clínicas e prestadores de serviço frequentemente não têm tempo nem confiança para usar IA por conta própria. Você pode oferecer um serviço simples: organizar um conjunto de pedidos prontos personalizados para o negócio da pessoa: respostas padrão para clientes, descrições de produtos, legendas para redes sociais. Entregando isso como um pacote único, cobrado uma única vez ou como uma pequena mensalidade de acompanhamento.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Criando conteúdo educativo</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Se você gosta de ensinar, pode produzir conteúdo curto, como vídeos, posts ou até um pequeno grupo de WhatsApp pago, mostrando, na prática, como pessoas da sua área específica podem usar IA no dia a dia. Quem já passou pela confusão de não entender o assunto tende a confiar mais em quem explica de forma simples.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Oferecendo consultoria pontual</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma sessão única de duas horas, presencial ou por chamada de vídeo, ensinando um pequeno empresário a aplicar os módulos deste guia na própria rotina, já é um serviço com valor percebido alto e custo de entrega praticamente zero para você.
            </p>
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-6 rounded-lg border border-amber-400/30 mt-6">
              <h4 className="text-amber-300 font-semibold mb-2">Como definir um valor inicial</h4>
              <p className="text-gray-300 text-sm">Para quem está começando, uma forma simples de precificar é pensar no tempo que a pessoa vai economizar, não apenas no tempo que você vai gastar para entregar. Um pacote que economiza algumas horas por semana vale muito mais para o cliente do que o tempo que você levou para montá-lo. Comece com um valor justo para ambos os lados e ajuste com base nos primeiros resultados.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus6" className="py-16 border-t border-amber-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">Bônus 6 - Um Dia na Vida, Com e Sem IA</h2>
          <p className="text-amber-400 text-sm mb-6">Veja na prática como a IA transforma uma rotina de trabalho real.</p>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Acompanhe um dia comum de uma profissional fictícia, dona de uma pequena clínica de estética: primeiro sem usar IA, depois aplicando tudo o que foi ensinado aqui.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-500/5 p-6 rounded-lg border border-red-500/20">
                <h3 className="text-red-400 font-semibold text-lg mb-4">☀️ O dia sem IA</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>Às oito da manhã, ela chega e encontra dez mensagens de clientes no WhatsApp. Leva quase quarenta minutos só para responder tudo.</p>
                  <p>No meio da manhã, precisa escrever uma descrição para um novo procedimento e passa vinte minutos tentando encontrar as palavras certas.</p>
                  <p>Na hora do almoço, pensa em uma postagem para as redes sociais, mas acaba deixando para depois.</p>
                  <p>No fim do dia, um cliente reclama de um atraso, e ela demora para encontrar um tom profissional sem parecer frio.</p>
                </div>
              </div>
              <div className="bg-green-500/5 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-green-400 font-semibold text-lg mb-4">🚀 O mesmo dia com IA</h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>Às oito da manhã, usa a IA para gerar respostas curtas e educadas para as dez mensagens de uma vez. Em cinco minutos, revisa e envia tudo.</p>
                  <p>Para a descrição do novo procedimento, usa o método C.A.F.É. Em menos de dois minutos tem um texto pronto, só ajusta uma palavra.</p>
                  <p>Na hora do almoço, pede cinco ideias de postagem para a semana, escolhe duas e já deixa programadas.</p>
                  <p>No fim do dia, usa um modelo salvo de resposta para reclamações, ajusta os detalhes e responde em menos de um minuto.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 p-6 rounded-lg border border-blue-400/30 text-center">
              <p className="text-gray-300 text-lg">
                A diferença não está em fazer tarefas completamente novas. Está em recuperar, todos os dias, um tempo que antes desaparecia em tarefas repetitivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="resumo" className="py-16 border-t border-purple-500/20 bg-purple-500/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Resumo Rápido de Todo o Material</h2>
          <img
            src="/images/resumo.svg"
            alt="Ilustração resumo"
            className="w-full rounded-lg mb-8 shadow-lg"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
          />
          <div className="prose prose-invert max-w-none">
            <div className="space-y-3">
              {[
                "Módulo 1: você não ficou para trás; este material existe para te colocar em dia, sem mistério.",
                "Módulo 2: IA é um sistema treinado para reconhecer padrões de linguagem, não uma mente consciente.",
                "Módulo 3: a explosão da IA aconteceu porque ela ficou fácil de acessar e fácil de usar, ao mesmo tempo.",
                "Mitos comuns: IA não é só para gente de tecnologia, não exige conhecimento técnico, e tem versões gratuitas.",
                "Módulo 4: comece com um único assistente de conversa gratuito, e explore outras categorias só depois.",
                "Módulo 5: use o método C.A.F.É. (Contexto, Ação, Formato, Exemplo) e refine a resposta em vez de desistir.",
                "Módulo 6: aplique a IA dentro da sua própria área de atuação, com exemplos prontos para adaptar.",
                "Módulo 7: transforme pedidos que funcionaram em modelos reutilizáveis e crie rotinas fixas de uso.",
                "Como apresentar no trabalho: teste em tarefas próprias primeiro, leve resultados concretos, respeite as políticas da empresa.",
                "Módulo 8: revise sempre os fatos, proteja dados sensíveis e mantenha a responsabilidade final com você.",
                "Módulo 9: siga o plano de sete dias, um passo simples por vez, sem pressa.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-slate-700/30">
                  <span className="text-purple-400 font-bold flex-shrink-0 w-6">✓</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="final" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Considerações Finais</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Você chegou ao final deste material com algo que poucas pessoas têm hoje: uma visão clara, sem exageros e sem mistério, do que a inteligência artificial realmente é e de como ela se encaixa no seu trabalho, na sua área, na sua realidade.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A diferença entre quem domina essa ferramenta e quem fica para trás não está em talento ou em formação técnica. Está, simplesmente, em quem decide praticar um pouco, toda semana, em tarefas reais. Você já tem o mapa completo. Agora é colocar o pé no caminho, começando pelo Dia 1 do seu plano de ação, hoje mesmo, enquanto a motivação ainda está fresca.
            </p>
            <div className="text-center mt-10">
              <p className="text-xl text-blue-400 font-semibold">Sucesso na sua jornada.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto para começar?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Este ebook fornece tudo que você precisa para dominar a IA de forma prática e segura. Comece hoje mesmo com o Módulo 1 e siga o plano de 7 dias.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollTo("module1")}>
            Começar a Leitura Agora
          </Button>
        </div>
      </section>

      <footer className="border-t border-blue-500/20 bg-slate-900/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Sobre o Ebook</h3>
              <p className="text-gray-400 text-sm">Um guia completo e prático para profissionais que desejam dominar a inteligência artificial sem conhecimento técnico prévio.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Conteúdo</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollTo("module1")} className="hover:text-blue-400">9 Módulos Completos</button></li>
                <li><button onClick={() => scrollTo("bonus4")} className="hover:text-amber-400">39 Prompts Prontos</button></li>
                <li><button onClick={() => scrollTo("module9")} className="hover:text-blue-400">Plano de 7 Dias</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollTo("module8")} className="hover:text-blue-400">Cuidados e Ética</button></li>
                <li><button onClick={() => scrollTo("module6")} className="hover:text-blue-400">Aplicações Práticas</button></li>
                <li><button onClick={() => scrollTo("bonus-header")} className="hover:text-amber-400">Bônus Exclusivos</button></li>
                <li><button onClick={() => scrollTo("resumo")} className="hover:text-purple-400">Resumo Rápido</button></li>
                <li><button onClick={() => scrollTo("final")} className="hover:text-blue-400">Considerações Finais</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 IA Sem Mistério. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
