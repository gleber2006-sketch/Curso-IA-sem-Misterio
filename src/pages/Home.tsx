import { useState } from "react"
import { Brain, Menu, X } from "lucide-react"
import { Button } from "../components/ui/button"

const modules = [
  { id: 1, title: "Módulo 1 — Boas-Vindas", section: "module1" },
  { id: 2, title: "Módulo 2 — O Que É IA de Verdade", section: "module2" },
  { id: 3, title: "Módulo 3 — Por Que Agora?", section: "module3" },
  { id: 4, title: "Mitos Comuns Sobre IA", section: "myths" },
  { id: 5, title: "Módulo 4 — As Ferramentas", section: "module4" },
  { id: 6, title: "Módulo 5 — Como Conversar com a IA", section: "module5" },
  { id: 7, title: "Módulo 6 — IA Aplicada à Sua Área", section: "module6" },
  { id: 8, title: "Módulo 7 — Automatizando", section: "module7" },
  { id: 9, title: "Módulo 8 — Cuidados e Ética", section: "module8" },
  { id: 10, title: "Módulo 9 — Plano de 7 Dias", section: "module9" },
]

const applications = [
  {
    title: "Vendas e Atendimento",
    desc: "Escrever respostas para objeções, montar roteiros de ligação, sugerir follow-ups educados.",
  },
  {
    title: "Educação",
    desc: "Criar planos de aula, gerar exercícios, adaptar explicações para diferentes idades.",
  },
  {
    title: "Marketing",
    desc: "Criar legendas, ideias de conteúdo, roteiros de vídeos, calendários editoriais.",
  },
  {
    title: "Saúde (Administrativa)",
    desc: "Organizar comunicação, redigir avisos, criar materiais educativos simples.",
  },
  {
    title: "Contabilidade",
    desc: "Explicar termos financeiros, redigir comunicados sobre prazos fiscais.",
  },
  {
    title: "Autônomos",
    desc: "Escrever orçamentos, responder perguntas frequentes, organizar agenda.",
  },
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
              O guia simples para qualquer profissional dominar a inteligência artificial — mesmo sem entender nada de tecnologia
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 1 — Boas-Vindas</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Imagine a seguinte cena: você está em uma reunião de trabalho e alguém comenta, com total naturalidade, "ah, isso eu resolvi com IA em cinco minutos". Todo mundo assente com a cabeça, como se fosse a coisa mais óbvia do mundo. Você sorri, concorda, e por dentro pensa: "eu nem sei por onde começar com isso".
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Se essa cena já aconteceu com você — ou algo parecido — , este material foi escrito exatamente para esse momento. Não para te transformar em especialista em tecnologia, e sim para tirar essa sensação de estar "por fora" e te colocar, em poucos dias, em um nível de uso prático e seguro da inteligência artificial.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Para quem é esse material</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Este conteúdo foi escrito para qualquer pessoa que trabalha — como funcionário, autônomo, dono de pequeno negócio, profissional liberal ou prestador de serviço — e que sente que a inteligência artificial é "coisa de gente de tecnologia". Não é. Na prática, ela funciona como uma ferramenta de trabalho, parecida com uma calculadora ou um aplicativo de planilha.
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 2 — O Que É IA de Verdade (Sem Jargão)</h2>
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
              Pense na IA como um sistema treinado lendo uma quantidade gigantesca de texto, imagens e informações — livros, sites, conversas, manuais, artigos — produzidos por seres humanos ao longo de décadas. A partir desse treinamento, ela aprendeu a reconhecer padrões.
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
                <p className="text-gray-300">Ferramentas que usam IA "por trás das cortinas", conectando tarefas automaticamente — organizando respostas, classificando e-mails ou preenchendo planilhas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module3" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 3 — Por Que Agora? O Furacão Que Virou Oportunidade</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 4 — As Ferramentas Que Realmente Importam</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 5 — Como "Conversar" Com a IA</h2>
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
                <h4 className="text-blue-300 font-semibold mb-2">C — Contexto</h4>
                <p className="text-gray-300">Explique a situação, o cenário e o seu papel. A IA precisa entender "quem" você é e "onde" você está.</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">A — Ação</h4>
                <p className="text-gray-300">Diga claramente o que você quer que a IA faça. Use verbos de ação como "escreva", "resuma", "crie".</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">F — Formato</h4>
                <p className="text-gray-300">Indique como você quer receber a resposta. Uma lista, um texto corrido, um e-mail formal, uma mensagem de WhatsApp.</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-blue-300 font-semibold mb-2">E — Exemplo</h4>
                <p className="text-gray-300">Sempre que puder, dê um exemplo do estilo que você quer, ou de algo parecido que já funcionou antes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="module6" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 6 — IA Aplicada à Sua Área de Trabalho</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 7 — Automatizando o Dia a Dia</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Depois de praticar pedidos individuais, o próximo passo natural é criar pequenas rotinas que economizam tempo de forma repetida, semana após semana.
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mt-8 mb-4">Comece com "modelos" prontos</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Uma das formas mais simples de automatizar sem precisar de nenhuma ferramenta nova é guardar, em um documento ou bloco de notas, os pedidos que funcionaram bem para você — e reutilizá-los toda semana, só trocando os detalhes específicos.
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

      <section id="module8" className="py-16 border-t border-blue-500/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 8 — Cuidados, Limites e Ética</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Módulo 9 — Seu Plano de Ação de 7 Dias</h2>
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
                <li><button onClick={() => scrollTo("module5")} className="hover:text-blue-400">39 Prompts Prontos</button></li>
                <li><button onClick={() => scrollTo("module9")} className="hover:text-blue-400">Plano de 7 Dias</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollTo("module8")} className="hover:text-blue-400">Cuidados e Ética</button></li>
                <li><button onClick={() => scrollTo("module6")} className="hover:text-blue-400">Aplicações Práticas</button></li>
                <li><button onClick={() => scrollTo("module2")} className="hover:text-blue-400">Conceitos Básicos</button></li>
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
